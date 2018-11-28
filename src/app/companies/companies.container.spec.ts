import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesContainerComponent } from './companies.container';
import { CompaniesComponent } from './companies.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';

describe('CompaniesComponent', () => {
  let component: CompaniesContainerComponent;
  let fixture: ComponentFixture<CompaniesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompaniesContainerComponent,
        CompaniesComponent,
        CompaniesListComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
