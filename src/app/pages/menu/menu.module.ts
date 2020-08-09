import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { MatIconModule } from '@angular/material/icon';
import { AdminRoutingModule } from '../admin/admin.routing';

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, MatIconModule, AdminRoutingModule],
  exports: [MenuComponent]
})
export class MenuModule {}
