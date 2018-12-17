import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule, MatFormFieldModule} from '@angular/material';
import { CompaniesContainerComponent } from './containers/companies.container';
import { CompaniesComponent } from './components/companies-ui/companies.component';
import { CompaniesListComponent } from './components/companies-list/companies-list.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';
import { CompanyFormsModule } from '../forms/forms.module';
import { CompanyDetailDialogComponent } from './components/company-detail-dialog/company-detail-dialog.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { companyReducer } from './reducers';
import { CompanyEffects } from './effects';

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
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forFeature([CompanyEffects])
  ],
  entryComponents: [
    CompanyDetailDialogComponent
  ]
})
export class CompaniesModule { }
