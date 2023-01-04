import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items = this.cartService.getItems();
  total:number =0;
  TotalPrice:number=0;
  Checkout:string="Your Order in The Way"
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }
buy (itemprice:number, quantity:string): void{
  this . TotalPrice = +quantity * itemprice
}
checkout(){
  alert(this .Checkout)
}
}
