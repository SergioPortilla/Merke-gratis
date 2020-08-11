import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../shared/services/products.service';
import { ProductType } from '../../../core/models/productType';

@Component({
  selector: 'merke-gratis-admin-product-type',
  templateUrl: './admin-product-type.component.html',
  styleUrls: ['./admin-product-type.component.scss']
})
export class AdminProductTypeComponent implements OnInit {
  step = 0;
  productTypes: ProductType[];
  productType: ProductType;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productType = new ProductType();
    this.getProductTypes();
  }

  getProductTypes() {
    this.productsService.getProductType().subscribe((productType) => {
      // const newtype: ProductType = new ProductType();
      // productType.push(newtype);
      this.productTypes = productType;
    });
  }

  updateProductType() {}

  saveProductType(productType: ProductType) {
    this.productsService.saveProductType(productType).subscribe((value) => {
      this.productTypes.push(value);
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }
}
