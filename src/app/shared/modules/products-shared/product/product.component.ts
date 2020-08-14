import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'merke-gratis-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() color: string;
  @Output() productChanges = new EventEmitter();
  color800: string;
  color900: string;
  colorGradient: string;

  ngOnInit(): void {
    if (!this.color) {
      this.color = 'primary';
    }
    this.color800 = 'mg--' + this.color + '800';
    this.color900 = 'mg--' + this.color + '900';
    this.colorGradient = 'mg--' + this.color + '-gradient';
    this.color = 'mg--' + this.color;
  }

  showInformation() {
    this.productChanges.emit();
  }
}
