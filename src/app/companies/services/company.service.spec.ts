import { TestBed } from '@angular/core/testing';

import { CompanyService } from './company.service';
import { tap, exhaustMap } from 'rxjs/operators';
import { CompanyRepository } from './company.repository';

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

  it('should load data before getItem', (done) => {
    const service: CompanyService = TestBed.get(CompanyService);
    const repo: CompanyRepository = TestBed.get(CompanyRepository);
    const spy = jest.spyOn(repo, 'getItems');
    service.getItem(1)
      .subscribe(item => {
        expect(item).toBeTruthy();
        expect(spy).toHaveBeenCalled();
        done();
      });
  });


  it('should return undefined if item not found', (done) => {
    const service: CompanyService = TestBed.get(CompanyService);
    const repo: CompanyRepository = TestBed.get(CompanyRepository);
    const spy = jest.spyOn(repo, 'getItems');
    service.getItem(100)
      .subscribe(item => {
        expect(item).toBe(undefined);
        expect(spy).toHaveBeenCalled();
        done();
      });
  });

  it('should add new item', (done) => {
    const service: CompanyService = TestBed.get(CompanyService);
    const repo: CompanyRepository = TestBed.get(CompanyRepository);
    const spy = jest.spyOn(repo, 'getItems');
    service
      .addItem({ id: 100, name: 'test'})
      .pipe(
        exhaustMap(result => {
          expect(result).toBeTruthy();
          expect(spy).toHaveBeenCalled();
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
    const repo: CompanyRepository = TestBed.get(CompanyRepository);
    const spy = jest.spyOn(repo, 'getItems');
    service
      .removeItem({ id: 1, name: 'Contoso'})
      .pipe(
        exhaustMap(result => {
          expect(result).toBeTruthy();
          expect(spy).toHaveBeenCalled();
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
