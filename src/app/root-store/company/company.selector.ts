import { adapter, CompanyState } from './company.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

/**
 * https://github.com/ngrx/platform/tree/master/projects/example-app
 * https://itnext.io/ngrx-best-practices-for-enterprise-angular-applications-6f00bcdf36d7
 * https://github.com/angular-university/angular-ngrx-course/blob/master/src/app/courses/services/courses.service.ts
 */

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
