import { Action } from '@ngrx/store';

import { Company } from '../../models/company.model';
import { Update } from '@ngrx/entity';

export enum CompanyActionTypes {
  LOAD_COMPANIES = '[Company] Load',
  ADD_COMPANY = '[Company] Add User',
  ADD_COMPANIES = '[Company] Add Users',
  UPDATE_COMPANY = '[Company] Update User',
  UPDATE_COMPANIES = '[Company] Update Users',
  UPSERT_COMPANY = '[Company] Upsert User', // add or update
  UPSERT_COMPANIES = '[Company] Upsert Users', // add or update
  DELETE_COMPANY = '[Company] Delete User',
  DELETE_COMPANIES = '[Company] Delete Users',
  CLEAR_COMPANIES = '[Company] Clear Users',
}

export class LoadCompanies implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES;
  constructor() {}
}

export class AddCompany implements Action {
  readonly type = CompanyActionTypes.ADD_COMPANY;
  constructor(public payload: {company: Company}) {}
}

export class AddCompanies implements Action {
  readonly type = CompanyActionTypes.ADD_COMPANIES;
  constructor(public payload: {companies: Company[]}) {}
}

export class UpdateCompany implements Action {
  readonly type = CompanyActionTypes.UPDATE_COMPANY;
  constructor(public payload: {company: Update<Company>}) {}
}

export class UpdateCompanies implements Action {
  readonly type = CompanyActionTypes.UPDATE_COMPANIES;
  constructor(public payload: {companies: Update<Company>[]}) {}
}

export class UpsertCompany implements Action {
  readonly type = CompanyActionTypes.UPSERT_COMPANY;
  constructor(public payload: {company: Company}) {}
}

export class UpsertCompanies implements Action {
  readonly type = CompanyActionTypes.UPSERT_COMPANIES;
  constructor(public payload: {companies: Company[]}) {}
}

export class DeleteCompany implements Action {
  readonly type = CompanyActionTypes.DELETE_COMPANY;

  constructor(public payload: { id: string }) {}
}

export class DeleteCompanies implements Action {
  readonly type = CompanyActionTypes.DELETE_COMPANIES;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearCompanies implements Action {
  readonly type = CompanyActionTypes.CLEAR_COMPANIES;
}


export type CompanyActions
  = LoadCompanies
  | AddCompany
  | AddCompanies
  | UpdateCompany
  | UpdateCompanies
  | UpsertCompany
  | UpsertCompanies
  | DeleteCompany
  | DeleteCompanies
  |ClearCompanies;
