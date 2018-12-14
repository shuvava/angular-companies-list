// https://github.com/ngrx/platform/tree/master/projects/example-app
import { adapter, CompanyState } from './company.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

const getSelectedCompanyId = (state: CompanyState) => state.selectedCompanyId;

export const selectCompaniesFeatureState = createFeatureSelector<CompanyState>('company');

export const selectAllCompanies = createSelector(
  selectCompaniesFeatureState,
  selectAll
);

export const selectCurrentCompanyId = createSelector(
  selectCompaniesFeatureState,
  getSelectedCompanyId
);

export const selectCurrentCompany = createSelector(
  selectCompaniesFeatureState,
  selectCurrentCompanyId,
  (userEntities, companyId) => userEntities[companyId]
);
