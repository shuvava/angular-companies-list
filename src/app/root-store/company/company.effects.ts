import { Injectable } from '@angular/core';
import { CompanyService } from 'src/app/companies/services/company.service';
import { LoadCompaniesAction, CompanyActionTypes, IsLoadingCompaniesAction } from './company.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CompanyState } from '.';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

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
      ofType<LoadCompaniesAction>(CompanyActionTypes.LOAD_COMPANIES),
      tap(_ => this.store.dispatch(new IsLoadingCompaniesAction())),
    );
}
