import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';
import { tap, exhaustMap } from 'rxjs/operators';

describe('CompanyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompanyService = TestBed.get(CompanyService);
    expect(service).toBeTruthy();
  });

  it('should have data', (done) => {
    const service: CompanyService = TestBed.get(CompanyService);
    service.getItems()
      .subscribe(items => {
        expect(items).toMatchSnapshot();
        done();
      });
  });

  it('should add new item', (done) => {
    const service: CompanyService = TestBed.get(CompanyService);
    service
      .addItem({ id: 100, name: 'test'})
      .pipe(
        tap(result => expect(result).toBeTruthy()),
        exhaustMap(result => {
          expect(result).toBeTruthy();
          return service.getItems();
        }),
      )
      .subscribe(items => {
        const item = items.find(val => val.id === 100);
        expect(item).toBeTruthy();
        done();
      });
  });

  it('should add remove item', (done) => {
    const service: CompanyService = TestBed.get(CompanyService);
    service
      .removeItem({ id: 1, name: 'Contoso'})
      .pipe(
        tap(result => expect(result).toBeTruthy()),
        exhaustMap(result => {
          expect(result).toBeTruthy();
          return service.getItems();
        }),
      )
      .subscribe(items => {
        const item = items.find(val => val.id === 1);
        expect(item).toBeFalsy();
        done();
      });
  });

});
