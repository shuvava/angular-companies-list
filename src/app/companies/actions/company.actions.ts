import { Action } from '@ngrx/store';

import { Company } from '../models';
import { Update } from '@ngrx/entity';

export enum CompanyActionTypes {
  LOAD_COMPANIES = '[Company] Loading',
  LOAD_COMPANIES_SUCCESS = '[Company] Loaded',
  ADD_COMPANY = '[Company] Adding User',
  ADD_COMPANY_SUCCESS = '[Company] Add User',
  ADD_COMPANIES = '[Company] Add Users',
  UPDATE_COMPANY = '[Company] Updating User',
  UPDATE_COMPANY_SUCCESS = '[Company] Updated User',
  UPDATE_COMPANIES = '[Company] Update Users',
  UPSERT_COMPANY = '[Company] Upsert User', // add or update
  UPSERT_COMPANIES = '[Company] Upsert Users', // add or update
  DELETE_COMPANY = '[Company] Delete User',
  DELETE_COMPANIES = '[Company] Delete Users',
  CLEAR_COMPANIES = '[Company] Clear Users',
  SELECT_COMPANY = '[Company] Select Company'
}

export class LoadCompanies implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES;
  constructor() {}
}

export class LoadCompaniesSuccess implements Action {
  readonly type = CompanyActionTypes.LOAD_COMPANIES_SUCCESS;
  constructor(public payload: {companies: Company[] }) {}
}

export class AddCompany implements Action {
  readonly type = CompanyActionTypes.ADD_COMPANY;
  constructor(public payload: {company: Company}) {}
}

export class AddCompanySuccess implements Action {
  readonly type = CompanyActionTypes.ADD_COMPANY_SUCCESS;
  constructor(public payload: {company: Company}) {}
}

export class AddCompanies implements Action {
  readonly type = CompanyActionTypes.ADD_COMPANIES;
  constructor(public payload: {companies: Company[]}) {}
}

export class UpdateCompany implements Action {
  readonly type = CompanyActionTypes.UPDATE_COMPANY;
  constructor(public payload: {company: Company}) {}
}
export class UpdateCompanySuccess implements Action {
  readonly type = CompanyActionTypes.UPDATE_COMPANY_SUCCESS;
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

  constructor(public payload: { id: number }) {}
}

export class DeleteCompanies implements Action {
  readonly type = CompanyActionTypes.DELETE_COMPANIES;

  constructor(public payload: { ids: number[] }) {}
}

export class ClearCompanies implements Action {
  readonly type = CompanyActionTypes.CLEAR_COMPANIES;
}

export class SelectCompany implements Action {
  readonly type = CompanyActionTypes.SELECT_COMPANY;

  constructor(public payload: { id: number }) {}
}


export type CompanyActions
  = LoadCompanies
  | LoadCompaniesSuccess
  | AddCompany
  | AddCompanySuccess
  | AddCompanies
  | UpdateCompany
  | UpdateCompanySuccess
  | UpdateCompanies
  | UpsertCompany
  | UpsertCompanies
  | DeleteCompany
  | DeleteCompanies
  | ClearCompanies
  | SelectCompany;
