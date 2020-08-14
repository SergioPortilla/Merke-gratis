import { Component } from '@angular/core';

@Component({
  selector: 'merke-gratis-right-info',
  template: '<ng-content></ng-content>',
  styles: [':host{ display: flex; align-items: center; justify-content: center; width: 5em;}']
})
export class ProductRightInfoComponent {}
