//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

//3rd party
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';

//components, providers
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CarListService } from "./services/car-list.service";

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule
  ],
  providers: [ CarListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
