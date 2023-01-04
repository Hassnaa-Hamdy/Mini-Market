import { Injectable } from '@angular/core';
import { GoodsDetailes } from 'src/app/interfaces/goods-detailes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  items : GoodsDetailes[]=[];

  addToCart(goods:GoodsDetailes){
    this . items.push(goods)
  }
  getItems(){
    return this . items;
  }

  clearCart(){
    this.items = []
    return this .items
  }
 


  
}
