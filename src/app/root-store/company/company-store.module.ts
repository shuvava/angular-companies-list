import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { companyReducer } from './company.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CompanyEffects } from './company.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('company', companyReducer),
    EffectsModule.forFeature([CompanyEffects])
  ],
  declarations: []
})
export class CompanyStoreModule { }
