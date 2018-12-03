import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormInputComponent } from './form-input/form-input.component';

@NgModule({
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
})
export class CompanyFormsModule { }
