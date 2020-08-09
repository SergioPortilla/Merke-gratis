import { Route } from '../../core/constants/route.constants';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication.component';

const route: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: Route.PATHS.AUTHENTICATION.LOGIN, component: LoginComponent },
      { path: Route.PATHS.AUTHENTICATION.REGISTRY, component: RegistryComponent },
      { path: Route.PATHS.AUTHENTICATION.ABOUT, component: AboutComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
