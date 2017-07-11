import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';

import { AppComponent }   from './app.component';
import { SubComponent }   from './app.subComponent';
import { FormsComponent }   from './app.formsComponent';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SubComponent, FormsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
