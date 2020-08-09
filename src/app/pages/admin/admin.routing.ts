import { Route } from '../../core/constants/route.constants';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminGuard } from '../../core/guards/admin.guard';
import { MenuComponent } from '../menu/menu.component';

const route: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [{ path: Route.PATHS.HOME_ADMIN.PRINCIPAL, component: HomeAdminComponent, canActivate: [AdminGuard] }]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
