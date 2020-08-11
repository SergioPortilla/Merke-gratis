import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routing';
import { HomePersonComponent } from './home-person/home-person.component';
import { PersonGuard } from '../../core/guards/person.guard';
import { UserProductsDetailComponent } from './user-products-detail/user-products-detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [HomePersonComponent, UserProductsDetailComponent],
  imports: [CommonModule, UserRoutingModule, MatDialogModule, MatButtonModule, MatIconModule],
  providers: [PersonGuard]
})
export class UserModule {}
