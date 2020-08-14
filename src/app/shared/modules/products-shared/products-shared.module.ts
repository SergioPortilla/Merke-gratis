import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ProductRightInfoComponent } from './product/product-right-info.component';
import { ProductLeftInfoComponent } from './product/product-left-info.component';

@NgModule({
  declarations: [ProductComponent, ProductRightInfoComponent, ProductLeftInfoComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatTooltipModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [ProductComponent, ProductRightInfoComponent, ProductLeftInfoComponent]
})
export class ProductsSharedModule {}
