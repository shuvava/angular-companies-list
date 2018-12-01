import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Company } from 'src/app/models/company.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent implements OnInit {
  selectedCompany$: Company = undefined;

  @Input() companies: Company[];
  // @Output() select = new EventEmitter();
  // https://netbasal.com/event-emitters-in-angular-13e84ee8d28c
  @Output() select = new BehaviorSubject<Company>(this.selectedCompany$);

  constructor() { }

  ngOnInit() {
  }

  selectCompany(company: Company) {
    if (this.selectedCompany$ === company) {
      this.selectedCompany$ = undefined;
    } else {
      this.selectedCompany$ = company;
    }
    this.select.next(this.selectedCompany$);
  }

}
