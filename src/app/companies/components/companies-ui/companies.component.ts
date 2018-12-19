import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CompanyDetailDialogComponent } from '../company-detail-dialog/company-detail-dialog.component';
import { Company } from '@app/companies/models';

@Component({
  selector: 'app-companies-ui',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompaniesComponent implements OnInit {
  @Input() title: string;
  @Input() companies: Company[];
  @Input() currentCompany: Company = undefined;

  @Output() update = new EventEmitter();
  @Output() add = new EventEmitter();
  @Output() select = new EventEmitter();

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  selectCompany(company: Company) {
    // this.currentCompany = company;
    if (company) {
      this.select.emit(company.id);
    } else {
      this.select.emit(null);
    }
  }

  onAddNew() {
    const dialogRef = this.dialog.open(CompanyDetailDialogComponent, {
      width: '250px',
      data: new Company(),
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`The dialog was closed with result: ${JSON.stringify(result)}`);
      this.add.emit(result);
    });
  }

  updateCompany(company: Company) {
    this.update.emit(company);
  }

}
