import { Action as CompanyAction, LOAD_COMPANIES, LOAD_COMPANIES_SUCCESS } from 'src/app/root-store/company/actions';

export function companyReducer(state = [], action: CompanyAction) {
  switch (action.type) {
    case LOAD_COMPANIES_SUCCESS: {
      return action.payload;
    }
    default: {
      return state;
    }
  }
}
