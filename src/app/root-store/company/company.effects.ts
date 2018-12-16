import { Injectable } from '@angular/core';
import { CompanyService } from 'src/app/companies/services/company.service';
import { LoadCompanies, CompanyActionTypes, LoadCompaniesSuccess, UpdateCompany, UpdateCompanySuccess, AddCompanySuccess } from './company.actions';
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
          map(items => new LoadCompaniesSuccess({ companies: items })),
        )
      ),
    );

  @Effect()
  updateCompany$ = this.actions$
    .pipe(
      ofType<UpdateCompany>(CompanyActionTypes.UPDATE_COMPANY),
      tap(() => console.log('Effect updating company')),
      switchMap((state) => this.companiesService
        .updateItem(state.payload.company)
        .pipe(
          tap(result => console.log(`Effect update was successful:${result}`)),
          map(() => new UpdateCompanySuccess({
            company: {
              id: state.payload.company.id,
              changes: state.payload.company
            }
          }))
        )
      ),
    );

  @Effect()
  addCompany$ = this.actions$
    .pipe(
      ofType<UpdateCompany>(CompanyActionTypes.ADD_COMPANY),
      tap(() => console.log('Effect adding company')),
      switchMap((state) => this.companiesService
        .addItem(state.payload.company)
        .pipe(
          tap(result => console.log(`Effect add was successful:${result}`)),
          map(() => new AddCompanySuccess({
            company:  state.payload.company
          }))
        )
      ),
    );
}
