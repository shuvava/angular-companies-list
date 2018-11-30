import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.css']
})
export class CompanyDetailComponent implements OnInit {
  @Input() company: Company = undefined;
  constructor() { }

  ngOnInit() {
  }

}
