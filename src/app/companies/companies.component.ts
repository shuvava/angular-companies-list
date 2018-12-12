import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-companies-ui',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesComponent implements OnInit {
  @Input() title: string;
  @Input() companies: Company[];

  @Output() update = new EventEmitter();

  currentCompany: Company = undefined;

  constructor() { }

  ngOnInit() {
  }

  selectCompany(company: Company) {
    this.currentCompany = company;
  }

  updateCompany(company: Company) {
    this.update.emit(company);
  }

}
