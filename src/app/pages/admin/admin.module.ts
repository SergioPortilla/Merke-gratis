import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AdminRoutingModule } from './admin.routing';
import { MenuModule } from '../menu/menu.module';
import { AdminGuard } from '../../core/guards/admin.guard';
import { ProductsSharedModule } from '../../shared/modules/products-shared/products-shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { languageModules } from '../../core/locale/language';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminProductTypeComponent } from './admin-product-type/admin-product-type.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { DeleteProductsComponent } from './admin-products/delete-products.component';

@NgModule({
  declarations: [HomeAdminComponent, AdminProductsComponent, AdminProductTypeComponent, DeleteProductsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ...languageModules,
    MenuModule,
    ProductsSharedModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatDividerModule
  ],
  providers: [AdminGuard]
})
export class AdminModule {}
