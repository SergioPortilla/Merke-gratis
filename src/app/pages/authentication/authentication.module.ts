import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistryComponent } from './registry/registry.component';
import { HttpClientModule } from '@angular/common/http';
import { languageModules } from '../../shared/locale/language';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent, RegistryComponent],
  exports: [AuthenticationComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    HttpClientModule,
    ...languageModules,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AuthenticationModule {}
