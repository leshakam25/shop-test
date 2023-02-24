import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TopBarModule} from "./shared/top-bar/top-bar.module";
import {ItemListModule} from "./item-list/item-list.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TopBarModule,
    ItemListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
