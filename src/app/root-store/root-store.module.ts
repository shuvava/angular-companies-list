import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { environment } from '@env/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  imports: [
    CommonModule,

    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      name: 'Companies list App',
      logOnly: environment.production,
    }),
  ],
  declarations: []
})
export class RootStoreModule { }
