import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from  '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { SubComponent }   from './app.subComponent';
import { FormsComponent }   from './app.formsComponent';
import { MDFComponent }   from './app.mdfComponent';

import { EmployeeListComponent} from './services/employee-list.component'
import { EmployeeDetailComponent} from './services/employee-detail.component'

import { AnimationComponent } from './app.animation.component'


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule ],
  declarations: [ AppComponent, SubComponent, FormsComponent, MDFComponent,
                  EmployeeListComponent, EmployeeDetailComponent,
                  AnimationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
