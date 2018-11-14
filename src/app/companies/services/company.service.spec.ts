import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';

describe('CompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyService = TestBed.get(CompanyService);
    expect(service).toBeTruthy();
  });

  it('should have data', (done) => {
    const service: CompanyService = TestBed.get(CompanyService);
    service.get()
      .subscribe(items => {
        expect(items).toMatchSnapshot();
        done();
      });
  });
});
