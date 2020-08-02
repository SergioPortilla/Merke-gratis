import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { PagesRoutingModule } from './pages/pages.routing';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AuthenticationModule, BrowserAnimationsModule, PagesRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
