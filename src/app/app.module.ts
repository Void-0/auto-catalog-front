//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

//3rd party
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdButtonToggleModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';

//components, providers
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CarListService } from "./services/car-list.service";
import { SortByPipe } from './pipes/sort-by.pipe';
import { FilterByPipe } from './pipes/filter-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    SortByPipe,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCardModule,
    MdButtonToggleModule,
    MdGridListModule
  ],
  providers: [ CarListService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
