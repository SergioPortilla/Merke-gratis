import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './pages/authentication/authentication.module';
import { PagesRoutingModule } from './pages/pages.routing';
import { AdminGuard } from './core/guards/admin.guard';
import { AdminModule } from './pages/admin/admin.module';
import { HomePersonComponent } from './pages/home/person/home-person/home-person.component';
import { PersonGuard } from './core/guards/person.guard';

@NgModule({
  declarations: [AppComponent, HomePersonComponent],
  imports: [BrowserModule, HttpClientModule, AuthenticationModule, BrowserAnimationsModule, PagesRoutingModule, AdminModule],
  providers: [AdminGuard, PersonGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
