import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesListComponent implements OnInit {
  @Input() companies: Company[];

  constructor() { }

  ngOnInit() {
  }

}
