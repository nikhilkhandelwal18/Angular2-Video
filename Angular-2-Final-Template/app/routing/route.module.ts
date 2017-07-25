import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainRouteComponent } from './rt.main.component'

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ MainRouteComponent ],
  bootstrap:    [ MainRouteComponent ]
})
export class RouteModule { }
