/**
 * responsibility of this service CRUD operation with Company[] data
 * it immolates http work
*/
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { companiesMock } from './company.mockData';
import { Company } from 'src/app/models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private items: Company[] = [];
  private data: Subject<Company[]> = new Subject();
  data$: Observable<Company[]> = this.data.asObservable();
  private isDataLoaded = false;
  constructor() { }

  getItems(): Observable<Company[]> {
    // return of(1)
    //   .pipe(
    //     delay(100),
    //     mergeMap(() => of(companiesMock))
    //   );
    if (!this.isDataLoaded) {
      of(1)
        .pipe(
          delay(100),
          tap(() => {
            this.items = companiesMock;
            this.emitUpdateEvent();
          })
        );
        this.isDataLoaded = true;
    }

      return this.data$;
  }

  private emitUpdateEvent() {
    this.data.next(this.items);
  }

  addItem(item: Company) {
    of(1)
    .pipe(
      delay(100),
      tap(() => {
        this.items = companiesMock;
        this.emitUpdateEvent();
      })
    );
    this.items.push(item);
    this.emitUpdateEvent();
  }
  removeItem(item: Company) {
    this.items = this.items.filter(w => w.id !== item.id);
    this.emitUpdateEvent();
  }
}
