import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product';
import { MatDialog } from '@angular/material/dialog';
import { AdminProductsComponent } from '../admin-products/admin-products.component';
import { ProductsService } from '../../../shared/services/products.service';
import { DeleteProductsComponent } from '../admin-products/delete-products.component';

@Component({
  selector: 'merke-gratis-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  sessionType: string;
  products: Product[];
  newProduct: Product;

  constructor(public dialog: MatDialog, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.sessionType = localStorage.getItem('sessionType');
    this.newProduct = new Product();
    this.getProducts();
  }

  getProducts() {
    this.productsService.getProducts().subscribe((products) => {
      products.forEach((product) => {
        if (!product.image) {
          product.image = 'assets/images/products/strawberry.png';
        }
      });
      this.products = products;
    });
  }

  deleteProduct(productCode: string) {
    const dialogRef = this.dialog.open(DeleteProductsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.productsService.deleteProduct(productCode).subscribe(() => {
          const predicate = (product: Product) => product.productCode === productCode;
          this.products.splice(this.products.findIndex(predicate), 1);
        });
      }
    });
  }

  saveProduct(product: Product, isNew: boolean) {
    if (isNew) {
      this.productsService.saveProduct(product).subscribe((response: Product) => {
        response.image = 'assets/images/products/coca-cola-6L.png';
        this.products.push(response);
      });
    } else {
      this.productsService.updateProduct(product).subscribe();
    }
  }

  amount(product: Product, sum: number) {
    const amount = product.amount + sum;
    if (amount >= 0) {
      product.amount = amount;
    }
  }

  openDialog(product: Product, isNew: boolean) {
    const dialogRef = this.dialog.open(AdminProductsComponent, {
      data: { product_info: product, is_new: isNew }
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.saveProduct(result.product_info, isNew);
      }
    });
  }
}
