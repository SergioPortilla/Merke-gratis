import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../core/models/product';

@Component({
  selector: 'merke-gratis-modal-products',
  templateUrl: './user-products-detail.component.html',
  styleUrls: ['./user-products-detail.component.scss']
})
export class UserProductsDetailComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { product_info: Product }) {}

  onFileInput(event) {
    console.log(event.target.files[0].name);
    this.data.product_info.image = event.target.files[0].name;
  }

  ngOnInit(): void {
    console.log(this.data);
  }
}
