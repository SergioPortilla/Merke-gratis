import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { Route } from '../shared/constants/route.constants';

const route: Routes = [
  { path: Route.PATHS.AUTHENTICATION.LOGIN, component: AuthenticationComponent }
  // { path: Route.PATHS.AUTHENTICATION.REGISTRY, component:  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
