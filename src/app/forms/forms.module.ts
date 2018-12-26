import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';

export const CompanyFormsModuleConfig = {
  declarations: [
    FormInputComponent
  ],
  exports: [
    FormInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
};

@NgModule(CompanyFormsModuleConfig)
export class CompanyFormsModule { }
