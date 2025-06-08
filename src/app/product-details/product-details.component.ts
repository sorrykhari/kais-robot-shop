import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';
import { NgIf, NgClass, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [ NgIf, NgClass,CurrencyPipe ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter();
  
  getImageUrl(product: IProduct) {
      if (!product) return '';
      return '/assets/images/robot-parts/' + product.imageName;
    }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}
