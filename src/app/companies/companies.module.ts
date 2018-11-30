import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompaniesContainerComponent } from './companies.container';
import { CompaniesComponent } from './companies.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';

@NgModule({
  declarations: [
    CompaniesContainerComponent,
    CompaniesComponent,
    CompaniesListComponent,
    CompanyDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class CompaniesModule { }
