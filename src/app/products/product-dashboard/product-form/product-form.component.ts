import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { UtilityService } from 'src/app/services/utility.service';
import { ProductStatus } from 'src/app/shared/const/productsEnum';
import { Iproducts } from 'src/app/shared/models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor(
    private _utilityService : UtilityService,
    private _productsService : ProductsService
    ) { }

  ngOnInit(): void {
  }

  onProductAdd(name : HTMLInputElement, details : HTMLTextAreaElement){
    if(name.value.length > 0 && details.value.length > 0){
      let prod : Iproducts = {
        pname : name.value,
        pdetails : details.value,
        pstatus : ProductStatus.Inprogress,
        id : this._utilityService.uuid()
      }
      name.value = '';
      details.value = '';
    this._productsService.addProduct(prod)      
    }
  return false
  }


}
