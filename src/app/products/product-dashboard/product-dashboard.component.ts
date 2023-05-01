import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Iproducts } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {
  productArray : Array<Iproducts> = []

  constructor(private _productService : ProductsService) { }

  ngOnInit(): void {
    this.productArray = this._productService.getAllProducts()
  }

}
