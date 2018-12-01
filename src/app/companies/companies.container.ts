import { Component, OnInit } from '@angular/core';
import { CompanyService } from './services/company.service';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.container.html'
})
export class CompaniesContainerComponent implements OnInit {
  companies$: Observable<Company[]> = this.companiesService.getItems();

  constructor(private companiesService: CompanyService) { }

  ngOnInit() {}
}
