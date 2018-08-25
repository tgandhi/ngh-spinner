import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {NghSpinnerModule} from '../../projects/ngh-spinner/src/public_api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NghSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
