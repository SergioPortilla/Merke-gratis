import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationComponent } from './authentication/authentication/authentication.component';
import { Route } from '../core/constants/route.constants';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { AdminGuard } from '../core/guards/admin.guard';

const route: Routes = [
  { path: '', component: AuthenticationComponent },
  { path: Route.PATHS.HOMEADMIN.PRINCIPAL, component: HomeAdminComponent, canActivate: [AdminGuard] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
