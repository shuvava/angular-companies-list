import { Component, OnInit, Inject } from '@angular/core';
import { CompanyDetailBaseComponent } from '../company-detail-base/company-detail-base.component';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Company } from 'src/app/models/company.model';

@Component({
  selector: 'app-company-detail-dialog',
  templateUrl: './company-detail-dialog.component.html',
  styleUrls: ['./company-detail-dialog.component.css']
})
export class CompanyDetailDialogComponent extends CompanyDetailBaseComponent {

  constructor(
    public dialogRef: MatDialogRef<CompanyDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Company,
    protected formBuilder: FormBuilder) {
    super(formBuilder);
    this.company = data;
    this.IsNew = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onOk(): void {
    const result = this.value();
    console.log(`dialog results: ${JSON.stringify(result)}`);
    this.dialogRef.close(result);
  }
}
