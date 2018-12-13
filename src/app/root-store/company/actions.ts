import { Company } from '../../models/company.model';

export const LOAD_COMPANIES = 'LOAD_COMPANIES';
export const LOAD_COMPANIES_SUCCESS = 'LOAD_COMPANIES_SUCCESS';

export class LoadCompaniesAction {
  readonly type = LOAD_COMPANIES;
  constructor() {}
}

export class LoadCompaniesSuccessAction {
  readonly type = LOAD_COMPANIES_SUCCESS;
  constructor(public payload: Company[]) {}
}

export type Action
  = LoadCompaniesAction
  | LoadCompaniesSuccessAction;
