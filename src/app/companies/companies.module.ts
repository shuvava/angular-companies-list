import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import { CompaniesContainerComponent } from './companies.container';
import { CompaniesComponent } from './companies.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyFormsModule } from '../forms/forms.module';
import { CompanyDetailDialogComponent } from './company-detail-dialog/company-detail-dialog.component';

@NgModule({
  declarations: [
    CompaniesContainerComponent,
    CompaniesComponent,
    CompaniesListComponent,
    CompanyDetailComponent,
    CompanyDetailDialogComponent,
  ],
  exports: [
    CompaniesContainerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CompanyFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  entryComponents: [
    CompanyDetailDialogComponent
  ]
})
export class CompaniesModule { }
