import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { NgModule } from '@angular/core';
import { Route } from '../../shared/constants/route.constants';

const route: Routes = [
  { path: Route.PATHS.AUTHENTICATION.LOGIN, component: LoginComponent },
  { path: Route.PATHS.AUTHENTICATION.REGISTRY, component: RegistryComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
