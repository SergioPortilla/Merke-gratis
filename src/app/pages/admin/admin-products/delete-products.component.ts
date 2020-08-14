import { Component } from '@angular/core';

@Component({
  template:
    '<h2 mat-dialog-title>{{"REGISTRY-PRODUCT.WARNING" | translate}}</h2>' +
    '<mat-dialog-content class="mat-typography">{{"REGISTRY-PRODUCT.DELETE-PRODUCT" | translate}}</mat-dialog-content>' +
    '<mat-dialog-actions align="end">' +
    '  <button mat-button color="warn" mat-dialog-close>{{"REGISTRY-PRODUCT.CANCEL" | translate}}</button>' +
    '  <button mat-flat-button color="warn" [mat-dialog-close]="true" >{{"REGISTRY-PRODUCT.OK" | translate}}</button>' +
    '</mat-dialog-actions>'
})
export class DeleteProductsComponent {}
