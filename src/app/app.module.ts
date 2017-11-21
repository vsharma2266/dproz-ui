import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/global-components/header/header.component';
import { AppRoute } from './app.routes';
import { DprozModule } from './dproz/dproz.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,

    // Routing
    AppRoute,

    DprozModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
