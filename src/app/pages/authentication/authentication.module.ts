import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RegistryComponent } from './registry/registry.component';
import { HttpClientModule } from '@angular/common/http';
import { languageModules } from '../../core/locale/language';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [LoginComponent, AuthenticationComponent, RegistryComponent, AboutComponent],
  exports: [AuthenticationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ...languageModules,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    RouterModule,
    SharedModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule
  ]
})
export class AuthenticationModule {}
