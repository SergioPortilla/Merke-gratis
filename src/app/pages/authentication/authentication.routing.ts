import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { NgModule } from '@angular/core';
import { Route } from '../../core/constants/route.constants';
import { AboutComponent } from './about/about.component';

const route: Routes = [
  { path: '', redirectTo: Route.PATHS.AUTHENTICATION.LOGIN, pathMatch: 'full' },
  { path: Route.PATHS.INIT, redirectTo: Route.PATHS.AUTHENTICATION.LOGIN },
  { path: Route.PATHS.AUTHENTICATION.LOGIN, component: LoginComponent },
  { path: Route.PATHS.AUTHENTICATION.REGISTRY, component: RegistryComponent },
  { path: Route.PATHS.AUTHENTICATION.ABOUT, component: AboutComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
