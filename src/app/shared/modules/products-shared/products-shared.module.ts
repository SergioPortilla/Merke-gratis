import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftInfoComponent, ProductComponent, RightInfoComponent } from './product/product.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [ProductComponent, RightInfoComponent, LeftInfoComponent],
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
  exports: [ProductComponent, RightInfoComponent, LeftInfoComponent]
})
export class ProductsSharedModule {}
