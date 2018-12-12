/**
 * responsibility of this service CRUD operation with Company[] data
 * it immolates http work
*/
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { exhaustMap, tap, first } from 'rxjs/operators';
import { Company } from 'src/app/models/company.model';
import { CompanyRepository } from './company.repository';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private items: Company[] = [];
  private data: BehaviorSubject<Company[]> = new BehaviorSubject([]);
  data$: Observable<Company[]> = this.data.asObservable();
  private isDataLoaded = false;
  constructor(private companyRepository: CompanyRepository) { }

  getItems(): Observable<Company[]> {
    if (this.isDataLoaded) {
      return this.data$;
    }

    return this.companyRepository
      .getItems()
      .pipe(
        exhaustMap((items) => {
          this.items = items;
          this.isDataLoaded = true;
          this.emitUpdateEvent();
          return this.data$;
        }),
      );
  }

  getItem(id: number): Observable<Company> {
    return this
      .getItems()
      .pipe(
        first(),
        exhaustMap((items) => {
          const inx = items.findIndex((w: Company) => w.id === id);
          if (inx === -1) {
            return of(undefined);
          }
          return of(items[inx]);
        }),
      );
  }

  private emitUpdateEvent() {
    this.data.next(this.items);
  }

  addItem(item: Company): Observable<boolean> {
    return this
      .getItems()
      .pipe(
        first(),
        exhaustMap(() => {
          return this.companyRepository.addItem(item);
        }),
        tap((result) => {
          if (result) {
            this.items.push(item);
            this.emitUpdateEvent();
          }
        }),
      );
  }

  removeItem(item: Company) {
    return this
      .getItems()
      .pipe(
        first(),
        exhaustMap(() => this.companyRepository.removeItem(item)),
        tap((result) => {
          if (result) {
            this.items = this.items.filter(w => w.id !== item.id);
            this.emitUpdateEvent();
          }
        }),
      );
  }

  updateItem(item: Company) {
    return this
      .getItems()
      .pipe(
        first(),
        exhaustMap(() => this.companyRepository.updateItem(item)),
        tap((result) => {
          if (result) {
            const toUpdate = this.items.find(w => w.id === item.id);
            Object.assign(toUpdate, item);
            this.emitUpdateEvent();
          }
        }),
      );
  }
}
