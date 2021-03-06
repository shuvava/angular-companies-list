import { OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Company } from '@app/companies/models';

export class CompanyDetailBaseComponent implements OnInit, OnChanges, OnDestroy {

  registerForm: FormGroup;
  subscription: Subscription;
  company: any;
  IsNew: any;

  constructor(protected formBuilder: FormBuilder) { }

  ngOnInit() {
    console.log('testtttttt');
    this.registerForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });
    this.initForm();
    this.subscription = this.registerForm
      .valueChanges
      .subscribe(form => console.log(`new from state: ${JSON.stringify(form)}`));

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.initForm();
  }

  initForm() {
    if (this.company) {
      this.registerForm.patchValue({
        id: this.company.id,
        name: this.company.name,
      });
    }
    if (!this.IsNew && this.registerForm) {
      this.registerForm.controls['id'].disable();
    }
  }

  value(): Company {
    if (this.company !== undefined && this.registerForm.valid) {
      const result = <Company>this.registerForm.getRawValue();
      result.id = parseInt(result.id.toString(), 10);
      return result;
    }
    return undefined;
  }

}
