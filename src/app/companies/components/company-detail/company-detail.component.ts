import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Company } from '../../models';
import { FormBuilder } from '@angular/forms';
import { CompanyDetailBaseComponent } from '../company-detail-base/company-detail-base.component';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompanyDetailComponent extends CompanyDetailBaseComponent {

  @Input() company: Company = undefined;
  @Input() submitTitle: String = 'Save';
  @Input() IsNew = false;

  @Output() action = new EventEmitter();

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
