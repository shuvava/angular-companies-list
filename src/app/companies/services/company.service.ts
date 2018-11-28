/**
 * responsibility of this service CRUD operation with Company[] data
 * it immolates http work
*/
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { exhaustMap, tap } from 'rxjs/operators';
import { Company } from 'src/app/models/company.model';
import { CompanyRepository } from './company.repository';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private items: Company[] = [];
  private data: Subject<Company[]> = new Subject();
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
          setTimeout(() => this.emitUpdateEvent(), 10);
          return this.data$;
        }),
      );
  }

  private emitUpdateEvent() {
    this.data.next(this.items);
  }

  addItem(item: Company): Observable<boolean> {
    return this.companyRepository
      .addItem(item)
      .pipe(
        tap((result) => {
          if (result) {
            this.items.push(item);
            this.emitUpdateEvent();
          }
        }),
      );
  }
  removeItem(item: Company) {
    return this.companyRepository
      .removeItem(item)
      .pipe(
        tap((result) => {
          if (result) {
            this.items = this.items.filter(w => w.id !== item.id);
            this.emitUpdateEvent();
          }
        }),
      );
  }
}
