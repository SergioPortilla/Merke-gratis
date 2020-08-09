import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product';
import { MatDialog } from '@angular/material/dialog';
import { ModalProductsComponent } from './modal-products/modal-products.component';

@Component({
  selector: 'merke-gratis-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.scss']
})
export class HomeAdminComponent implements OnInit {
  sessionType: string;

  purchase: Product[];

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.sessionType = localStorage.getItem('sessionType');
    this.purchase = [
      {
        id: 1,
        image: 'day-owl-3L',
        amount: 0,
        name: 'Day Owl Whiskey',
        description: 'is a good whiskey',
        price: 20000,
        flavors: ['Red Whiskey', 'Green Whiskey']
      },
      { id: 2, image: 'coca-cola-1.5L', amount: 0, name: 'Coca-cola', description: 'Is a famous quencher', price: 2500 },
      {
        id: 3,
        image: 'pringles-extra-box',
        amount: 0,
        name: 'Pringles extra box familiar',
        description: 'Potatos with many flavors',
        price: 45000
      }
    ];
  }

  amount(product: Product, sum: number) {
    const amount = product.amount + sum;
    if (amount >= 0) {
      product.amount = amount;
    }
  }

  showInformation(product: Product) {
    const dialogRef = this.dialog.open(ModalProductsComponent, {
      data: {
        product_info: product
      }
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
