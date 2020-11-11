import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { Route } from '../core/constants/route.constants';
import { MenuComponent } from './menu/menu.component';

const route: Routes = [
  { path: '', redirectTo: Route.PATHS.AUTHENTICATION.LOGIN, pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./authentication/authentication.module').then((module) => module.AuthenticationModule)
      },
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then((module) => module.AdminModule)
      },
      {
        path: '',
        component: MenuComponent,
        loadChildren: () => import('./user/user.module').then((module) => module.UserModule)
      },
      {
        path: '',
        loadChildren: () => import('./error/error.module').then((module) => module.ErrorModule)
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(route)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
