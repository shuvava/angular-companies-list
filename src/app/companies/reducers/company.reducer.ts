import { CompanyActionTypes, CompanyActions } from 'src/app/companies/actions/company.actions';
import { initialState, adapter } from './company.state';

export function companyReducer(state = initialState, action: CompanyActions) {
  switch (action.type) {
    case CompanyActionTypes.ADD_COMPANY_SUCCESS: {
      return adapter.addOne(action.payload.company, state);
    }

    case CompanyActionTypes.UPSERT_COMPANY: {
      return adapter.upsertOne(action.payload.company, state);
    }

    case CompanyActionTypes.ADD_COMPANIES: {
      return adapter.addMany(action.payload.companies, state);
    }

    case CompanyActionTypes.UPSERT_COMPANIES: {
      return adapter.upsertMany(action.payload.companies, state);
    }

    case CompanyActionTypes.UPDATE_COMPANY_SUCCESS: {
      return adapter.updateOne(action.payload.company, state);
    }

    case CompanyActionTypes.UPDATE_COMPANIES: {
      return adapter.updateMany(action.payload.companies, state);
    }

    case CompanyActionTypes.DELETE_COMPANY: {
      return adapter.removeOne(action.payload.id, state);
    }

    case CompanyActionTypes.DELETE_COMPANIES: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case CompanyActionTypes.LOAD_COMPANIES_SUCCESS: {
      state.isLoaded = true;
      return adapter.addAll(action.payload.companies, state);
    }
    case CompanyActionTypes.SELECT_COMPANY: {
      if (state.selectedCompanyId === action.payload.id) {
        return state;
      }
      state.selectedCompanyId = action.payload.id;
      return {...state};
    }
    case CompanyActionTypes.CLEAR_COMPANIES: {
      return adapter.removeAll({ ...state, isLoaded: false, selectedCompanyId: null });
    }
    default: {
      return state;
    }
  }
}
