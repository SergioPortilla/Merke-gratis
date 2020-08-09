import { Route } from '../../core/constants/route.constants';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PersonGuard } from '../../core/guards/person.guard';
import { HomePersonComponent } from './home-person/home-person.component';

const route: Routes = [{ path: Route.PATHS.HOME_PERSON.PRINCIPAL, component: HomePersonComponent, canActivate: [PersonGuard] }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
