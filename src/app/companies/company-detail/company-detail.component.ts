import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit, OnChanges, OnDestroy {

  @Input() company: Company = undefined;
  @Input() submitTitle: String = 'Save';
  @Input() IsNew = false;

  @Output() action = new EventEmitter();

  registerForm: FormGroup;
  subscription: Subscription;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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
    if (this.company !== undefined) {
      this.registerForm.patchValue({
        id: this.company.id,
        name: this.company.name,
      });
    }
    if (!this.IsNew && this.registerForm) {
      this.registerForm.controls['id'].disable();
    }
  }

  doAction() {
    if (this.company !== undefined && this.registerForm.valid) {
      this.action.emit(this.registerForm.getRawValue());
    }
  }

}
