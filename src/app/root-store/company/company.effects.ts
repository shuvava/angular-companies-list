import { Injectable } from '@angular/core';
import { CompanyService } from 'src/app/companies/services/company.service';
import { LoadCompanies, CompanyActionTypes, LoadCompaniesSuccess, UpdateCompany } from './company.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CompanyState } from '.';
import { Store } from '@ngrx/store';
import { tap, switchMap, map } from 'rxjs/operators';
import { Company } from 'src/app/models/company.model';

@Injectable()
export class CompanyEffects {

  constructor(
    private store: Store<CompanyState>,
    private companiesService: CompanyService,
    private actions$: Actions) {
  }

  @Effect()
  loadCompanies$ = this.actions$
    .pipe(
      ofType<LoadCompanies>(CompanyActionTypes.LOAD_COMPANIES),
      tap(() => console.log('loading companies')),
      switchMap(() => this.companiesService
        .getItems()
        .pipe(
          map(items => new LoadCompaniesSuccess({companies: items})),
        )
      ),
    );

  @Effect()
  updateCompany$ = this.actions$
    .pipe(
      ofType<UpdateCompany>(CompanyActionTypes.UPDATE_COMPANY),
      tap(() => console.log('updating company')),
      switchMap((state) => this.companiesService
      .updateItem(<Company>state.payload.company.changes)
      .pipe(
        tap(result => console.log(`update was successful:${result}`)),
      )
    ),
    );
}
