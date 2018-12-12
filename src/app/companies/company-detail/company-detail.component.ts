import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { CompanyDetailBaseComponent } from './company-detail-base.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent extends CompanyDetailBaseComponent {

  @Input() company: Company = undefined;
  @Input() submitTitle: String = 'Save';
  @Input() IsNew = false;

  @Output() action = new EventEmitter();

  /**
   *
   */
  constructor(protected formBuilder: FormBuilder) {
    super(formBuilder);
  }

  doAction() {
    const result = this.value();
    if (result) {
      this.action.emit(result);
    }
  }

}
