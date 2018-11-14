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
export class CompanyRepository {

  getItems(): Observable<Company[]> {
    return of(1)
      .pipe(
        delay(100),
        tap(() => console.log('HTTP GET /companies')),
        mergeMap(() => of(companiesMock))
      );
  }
  addItem(item: Company) {
    return of(1)
      .pipe(
        delay(100),
        tap(() => console.log(`HTTP POST /company/${item.id}`)),
        mergeMap(() => of(true))
      );
  }
  removeItem(item: Company) {
    return of(1)
      .pipe(
        delay(100),
        tap(() => console.log(`HTTP DELETE /company/${item.id}`)),
        mergeMap(() => of(true))
      );
  }
}
