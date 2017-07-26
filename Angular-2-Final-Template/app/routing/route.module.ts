import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

import { MainRouteComponent } from './rt.main.component'


@NgModule({
  imports:      [ BrowserModule,
                  AppRoutingModule
                ],
  declarations: [ MainRouteComponent, routingComponents ],
  bootstrap:    [ MainRouteComponent ]
})
export class RouteModule { }
