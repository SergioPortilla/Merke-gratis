import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { HomePersonComponent } from './home-person/home-person.component';
import { PersonGuard } from '../../core/guards/person.guard';

@NgModule({
  declarations: [HomePersonComponent],
  imports: [CommonModule, UserRoutingModule],
  providers: [PersonGuard]
})
export class UserModule {}
