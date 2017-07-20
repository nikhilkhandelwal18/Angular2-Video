import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent }   from './app.component';
import { SubComponent }   from './app.subComponent';
import { FormsComponent }   from './app.formsComponent';
import { MDFComponent }   from './app.mdfComponent';




@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, SubComponent, FormsComponent, MDFComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
