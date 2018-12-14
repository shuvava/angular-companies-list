import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Company } from 'src/app/models/company.model';

export const adapter: EntityAdapter<Company> = createEntityAdapter<Company>({
  selectId: model => model.id,
});

export const initialState: CompanyState = adapter.getInitialState({
  isLoaded: false,
  companies: [],
  selectedCompanyId: null,
});

export interface CompanyState extends EntityState<Company> {
  isLoaded: boolean;
  companies: Company[];
  selectedCompanyId: null | number;
}