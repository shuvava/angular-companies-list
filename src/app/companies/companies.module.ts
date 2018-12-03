import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CompaniesContainerComponent } from './companies.container';
import { CompaniesComponent } from './companies.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyFormsModule } from '../forms/forms.module';

@NgModule({
  declarations: [
    CompaniesContainerComponent,
    CompaniesComponent,
    CompaniesListComponent,
    CompanyDetailComponent,
  ],
  exports: [
    CompaniesContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyFormsModule,
  ]
})
export class CompaniesModule { }
