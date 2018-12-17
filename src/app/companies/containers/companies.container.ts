import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CompanyService } from '../services/company.service';
import { Observable } from 'rxjs';
import { Company } from '../models';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CompanySelectors, CompanyState } from '../reducers';
import { CompanyActions } from '../actions';

/**
 * asybc pipes with ngIf
 * //https://toddmotto.com/angular-ngif-async-pipe
 */

@Component({
  selector: 'app-companies',
  templateUrl: './companies.container.html'
})
export class CompaniesContainerComponent implements OnInit {
  // companies$: Observable<Company[]> = this.companiesService.getItems()
  companies$: Observable<Company[]> = this.store.select(CompanySelectors.selectAllCompanies)
    .pipe(
      tap(items => console.log(`received updated items: ${JSON.stringify(items)}`))
    );
  currentCompany$: Observable<Company> = this.store.select(CompanySelectors.selectCurrentCompany)
  .pipe(
    tap(item => console.log(`selected company: ${JSON.stringify(item)}`))
  );

  constructor(
    private store: Store<CompanyState>,
    // private companiesService: CompanyService,
    // private cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.store.dispatch(new CompanyActions.LoadCompanies());
  }

  updateCompany(company: Company): void {
    console.log(`updated company: ${JSON.stringify(company)}`);
    this.store.dispatch(new CompanyActions.UpdateCompany({
      company: company
    }));
    // this.companiesService.updateItem(company).subscribe((result) => {
    //   // this.cd.markForCheck();
    //   console.log(`update was successful:${result}`);
    // });
  }
  addCompany(company: Company): void {
    console.log(`added company: ${JSON.stringify(company)}`);
    this.store.dispatch(new CompanyActions.AddCompany({
      company: company
    }));
    // this.companiesService.addItem(company).subscribe((result) => {
    //   console.log(`add was successful:${result}`);
    // });
  }
  selectCompany(id: number): void {
    console.log(`selected company id: ${id}`);
    this.store.dispatch(new CompanyActions.SelectCompany({
      id: id
    }));
  }
}
