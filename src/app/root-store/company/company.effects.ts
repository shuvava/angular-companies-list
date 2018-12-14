import { Injectable } from '@angular/core';
import { CompanyService } from 'src/app/companies/services/company.service';
import { LoadCompanies, CompanyActionTypes } from './company.actions';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CompanyState } from '.';
import { Store } from '@ngrx/store';
import { tap, switchMap } from 'rxjs/operators';

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
      switchMap(() => this.companiesService.getItems())
    );
}
