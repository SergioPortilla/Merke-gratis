import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { Route } from '../core/constants/route.constants';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AdminGuard } from '../core/guards/admin.guard';
import { LoginComponent } from './authentication/login/login.component';
import { RegistryComponent } from './authentication/registry/registry.component';
import { AboutComponent } from './authentication/about/about.component';
import { HomePersonComponent } from './home/person/home-person/home-person.component';
import { PersonGuard } from '../core/guards/person.guard';

const route: Routes = [
  { path: '', redirectTo: Route.PATHS.INIT + '/' + Route.PATHS.AUTHENTICATION.LOGIN, pathMatch: 'full' },
  {
    path: Route.PATHS.INIT,
    component: AuthenticationComponent,
    children: [
      { path: Route.PATHS.AUTHENTICATION.LOGIN, component: LoginComponent },
      { path: Route.PATHS.AUTHENTICATION.REGISTRY, component: RegistryComponent },
      { path: Route.PATHS.AUTHENTICATION.ABOUT, component: AboutComponent }
    ]
  },
  { path: Route.PATHS.HOME_ADMIN.PRINCIPAL, component: HomeAdminComponent, canActivate: [AdminGuard] },
  { path: Route.PATHS.HOME_PERSON.PRINCIPAL, component: HomePersonComponent, canActivate: [PersonGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
