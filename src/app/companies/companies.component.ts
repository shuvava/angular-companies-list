import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Company } from '../models/company.model';
import { MatDialog } from '@angular/material';
import { CompanyDetailDialogComponent } from './company-detail-dialog/company-detail-dialog.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectCompany(company: Company) {
    this.currentCompany = company;
  }

  onAddNew() {
    const dialogRef = this.dialog.open(CompanyDetailDialogComponent, {
      width: '250px',
      data: new Company(),
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed with result: ${JSON.stringify(result)}`);
    });
  }

  updateCompany(company: Company) {
    this.update.emit(company);
  }

}
