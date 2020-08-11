import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'merke-gratis-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() productChanges = new EventEmitter();

  showInformation() {
    this.productChanges.emit();
  }
}

@Component({
  selector: 'merke-gratis-right-info',
  template: '<ng-content></ng-content>',
  styles: [':host{ display: flex; align-items: center; justify-content: center; width: 5em;}']
})
export class RightInfoComponent {}

@Component({
  selector: 'merke-gratis-left-info',
  template: '<ng-content></ng-content>',
  styles: [':host{ display: flex; align-items: center; justify-content: center; width: 5em;}']
})
export class LeftInfoComponent {}
