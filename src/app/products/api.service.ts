import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

searchKey = new BehaviorSubject('')

  constructor(private http:HttpClient) { }

  //getAllProducts
  getAllProducts(){
    return this.http.get('http://localhost:3000/all-products')
  }
  //add to wishlist
  addToWishlist(product:any){
    const body={
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      image:product.image
      
    }
    return this.http.post('http://localhost:3000/add-to-wishlist',body)
  }
//getwishlist
getWishlist(){
  return this.http.get('http://localhost:3000/get-wishlist')
}

//deleteFormWlist
deleteFormWlist(id:any){
  return this.http.delete('http://localhost:3000/delete-item-wishlist/'+id)
}

}
