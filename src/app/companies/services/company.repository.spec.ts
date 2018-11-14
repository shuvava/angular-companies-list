import { TestBed } from '@angular/core/testing';

import { CompanyRepository } from './company.repository';

describe('CompanyRepository', () => {
  beforeEach(() => TestBed.configureTestingModule({}));
  it('should be created', () => {
    const service: CompanyRepository = TestBed.get(CompanyRepository);
    expect(service).toBeTruthy();
  });

  it('should have data', (done) => {
    const service: CompanyRepository = TestBed.get(CompanyRepository);
    service.getItems()
      .subscribe(items => {
        expect(items).toMatchSnapshot();
        done();
      });
  });
});
