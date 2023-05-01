import { Injectable } from '@angular/core';
import { ProductStatus } from '../shared/const/productsEnum';
import { Iproducts } from '../shared/models/product';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   // API call to get products data from database
  productArray : Array<Iproducts> = [
      {
        pname : "Samsung 31",
        pdetails : "Mobile 128 6",
        pstatus : ProductStatus.Inprogress,
        id : '123qwrwtf2342'
  
      },
      {
        pname : "Samsung 31",
        pdetails : "Mobile 128 6",
        pstatus : ProductStatus.Dispatched,
        id : 'hfghfe27ey27e7hejhe4'

  
      }
    
  ]

  constructor(private _snackBarService : SnackbarService) { }

  getAllProducts():Array<Iproducts>{
    return this.productArray
  }

  addProduct(prod : Iproducts) : void{
    this.productArray.push(prod)
    // alert(`New Product ${prod.pname} is added`)
    this._snackBarService.onOpenSnackBar(`${prod.pname} is Added Successfully`)
  }

  updateStatus(prodObj : Iproducts, status : string){
    this.productArray.forEach(prod => {
      if(prod.id ===prodObj. id){
        prod.pstatus = status
      }

      this._snackBarService.onOpenSnackBar(`The status of products ${prodObj.pname} is changed to ${status}`)
    })
  }



  
}
