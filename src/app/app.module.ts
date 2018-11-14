import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompaniesContainerComponent } from './companies/companies.container';
import { AppRoutingModule } from './app-routing.module';
import { CompaniesComponent } from './companies/companies.component';
import { CompaniesListComponent } from './companies/companies-list/companies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompaniesContainerComponent,
    CompaniesComponent,
    CompaniesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
