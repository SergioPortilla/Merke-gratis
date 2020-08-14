import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from '../../../core/models/product';
import { ProductType } from '../../../core/models/productType';
import { ProductsService } from '../../../shared/services/products.service';
import { Provider } from '../../../core/models/provider';

@Component({
  selector: 'merke-gratis-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {
  productTypes: ProductType[];
  providers: Provider[];

  constructor(@Inject(MAT_DIALOG_DATA) public data: { product_info: Product; is_new: boolean }, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.getProductTypes();
    this.getProviders();
  }

  onFileInput(event) {
    console.log(event.target.files[0].name);
    this.data.product_info.image = event.target.files[0].name;
  }

  getProductTypes() {
    this.productsService.getProductType().subscribe((productsType) => {
      this.productTypes = productsType;
    });
  }

  getProviders() {
    const providers = new Provider();
    providers.id = 1;
    providers.name = 'Parmalat';
    // this.productsService.getProvider().subscribe((providers) => {
    this.providers = [providers];
    // });
  }
}
