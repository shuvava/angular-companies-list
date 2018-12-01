import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-companies-ui',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesComponent implements OnInit {
  @Input() title: string;
  @Input() companies: Company[];

  currentCompany: Company = undefined;

  constructor() { }

  ngOnInit() {
  }

  selectCompany(company: Company) {
    this.currentCompany = company;
  }

}
