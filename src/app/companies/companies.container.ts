import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CompanyService } from './services/company.service';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { CompanyState, CompanyActions } from '../root-store/company';

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
  companies$: Observable<Company[]> = this.store.select(state => state.companies)
  .pipe(
    tap(items => console.log(`received updated items: ${JSON.stringify(items)}`))
  );

  constructor(
    private store: Store<CompanyState>,
    private companiesService: CompanyService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.store.dispatch(new CompanyActions.LoadCompaniesAction())
  }

  updateCompany(company: Company): void {
    console.log(`updated company: ${JSON.stringify(company)}`);
    this.companiesService.updateItem(company).subscribe((result) => {
      // this.cd.markForCheck();
      console.log(`update was successful:${result}`);
    });
  }
  addCompany(company: Company): void {
    console.log(`added company: ${JSON.stringify(company)}`);
    this.companiesService.addItem(company).subscribe((result) => {
      console.log(`add was successful:${result}`);
    });
  }
}
