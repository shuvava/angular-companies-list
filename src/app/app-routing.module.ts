import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesContainerComponent } from './companies/containers/companies.container';

const routes: Routes = [
  { path: '', redirectTo: '/companies', pathMatch: 'full' },
  { path: 'companies', component: CompaniesContainerComponent },
  // { path: 'detail/:id', component: HeroDetailContainerComponent },
  // { path: 'heroes', component: HeroesContainerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {}
