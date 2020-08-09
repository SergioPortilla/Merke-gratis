import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminRoutingModule } from './admin.routing';
import { MenuModule } from '../menu/menu.module';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalProductsComponent } from './home-admin/modal-products/modal-products.component';
import { AdminGuard } from '../../core/guards/admin.guard';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeAdminComponent, ModalProductsComponent],
  imports: [CommonModule, AdminRoutingModule, MenuModule, MatIconModule, MatTooltipModule, MatDialogModule, MatButtonModule],
  providers: [AdminGuard]
})
export class AdminModule {}
