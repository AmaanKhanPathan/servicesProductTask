import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ProductStatus } from 'src/app/shared/const/productsEnum';
import { Iproducts } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input('product') prodObj! : Iproducts;
  allProductStatus = ProductStatus

  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
  }
  onStatusChange( status : string){
    this._productService.updateStatus(this.prodObj, status)
  }

}
