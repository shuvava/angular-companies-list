import { CompanyStoreModule } from './store.module';

describe('StoreModule', () => {
  let storeModule: CompanyStoreModule;

  beforeEach(() => {
    storeModule = new CompanyStoreModule();
  });

  it('should create an instance', () => {
    expect(storeModule).toBeTruthy();
  });
});
