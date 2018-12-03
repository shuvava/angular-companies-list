import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit, OnChanges {

  @Input() company: Company = undefined;
  @Input() action: String = 'Save';


  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: [null, [Validators.required]],
      name: [null, [Validators.required]],
    });
    this.initForm();
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
  }

  doAction() {
  }

}
