import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'merke-gratis-modal-products',
  templateUrl: './modal-products.component.html',
  styleUrls: ['./modal-products.component.scss']
})
export class ModalProductsComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { product_info: Product }) {}
}
