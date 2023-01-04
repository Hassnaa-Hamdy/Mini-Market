import { Component, OnInit } from '@angular/core';
import { GoodsDetailes } from 'src/app/interfaces/goods-detailes';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  term = ""
  addtocart(goods:GoodsDetailes){
    this.CartService.addToCart(goods);
    window . alert('your good has been added to the cart!');
  }
  goods : GoodsDetailes[]=[

{id:1, name:"Mango", price:35, imgurl:"assets/1.jpg"},
{id:2, name:"Strawberries", price:40, imgurl:"assets/2.jpg"},
{id:3, name:"Banana", price:30, imgurl:"assets/3.jpg"},
{id:4, name:"Red-Apple", price:25, imgurl:"assets/4.jpg"},
{id:5, name:"Potatoes", price:20, imgurl:"assets/5.jpg"},
{id:6, name:"Eggplant", price:15, imgurl:"assets/6.jpg"},
{id:7, name:"Onions", price:5, imgurl:"assets/7.jpg"},
{id:8, name:"Tomatoes", price:10, imgurl:"assets/8.jpg"},

]
  constructor(private route : ActivatedRoute, private CartService : CartService) { }

  ngOnInit(): void {
  }

}
