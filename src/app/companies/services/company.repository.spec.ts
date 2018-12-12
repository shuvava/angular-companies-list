import { TestBed } from '@angular/core/testing';

import { CompanyRepository } from './company.repository';
import { tap, exhaustMap } from 'rxjs/operators';

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

  it('should add new item', (done) => {
    const service: CompanyRepository = TestBed.get(CompanyRepository);
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

  it('should remove item', (done) => {
    const service: CompanyRepository = TestBed.get(CompanyRepository);
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

  it('should update item', (done) => {
    const service: CompanyRepository = TestBed.get(CompanyRepository);
    service
      .updateItem({ id: 1, name: 'Contoso1'})
      .pipe(
        tap(result => expect(result).toBeTruthy()),
        exhaustMap(result => {
          expect(result).toBeTruthy();
          return service.getItems();
        }),
      )
      .subscribe(items => {
        const item = items.find(val => val.id === 1);
        expect(item.name).toMatchSnapshot();
        done();
      });
  });
});
