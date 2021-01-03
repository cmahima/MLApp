import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxCSVtoJSONModule} from 'ngx-csvto-json';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { routing } from './app.routing';
import { AppPreprocessComponent } from './app-preprocess/app-preprocess.component';
import { AppMlmodelsComponent } from './app-mlmodels/app-mlmodels.component';
import {lookupLists, lookupListToken} from './providers';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HttpXhrBackend } from '@angular/common/http';
import {AppItemService} from './app-item.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHomeComponent,
    AppPreprocessComponent,
    AppMlmodelsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    NgxCSVtoJSONModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ AppItemService,
    { provide: lookupListToken, useValue: lookupLists }],
  bootstrap: [AppComponent]
})
export class AppModule { }
