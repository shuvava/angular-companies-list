/**
 * responsibility of this service CRUD operation with Company[] data
 * it immolates http work
*/
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { companiesMock } from './company.mockData';
import { Company } from 'src/app/models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyRepository {
  private items: Company[] = companiesMock;
  getItems(): Observable<Company[]> {
    return of(1)
      .pipe(
        delay(100),
        tap(() => console.log('HTTP GET /companies')),
        mergeMap(() => of(this.items))
      );
  }
  addItem(item: Company): Observable<boolean> {
    return of(1)
      .pipe(
        delay(100),
        tap(() => {
          this.items.push(item);
          console.log(`HTTP POST /company/${item.id}`);
        }),
        mergeMap(() => of(true))
      );
  }
  removeItem(item: Company): Observable<boolean> {
    return of(1)
      .pipe(
        delay(100),
        tap(() => {
          this.items = this.items.filter(w => w.id !== item.id);
          console.log(`HTTP DELETE /company/${item.id}`);
      }),
        mergeMap(() => of(true))
      );
  }
  updateItem(item: Company): Observable<boolean> {
    return of(1)
      .pipe(
        delay(100),
        tap(() => {
          const toUpdate = this.items.find(w => w.id === item.id);
          Object.assign(toUpdate, item);
          console.log(`HTTP PUT /company/${item.id}`);
      }),
        mergeMap(() => of(true))
      );
  }
}
