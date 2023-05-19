import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Book } from '../type/Book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit{

  @Input() book: Book = {} as Book;
  
 

  constructor(private cartService: CartService){
    
  }
  ngOnInit(): void {
    
  }

  //book_qty = this.cartService.getBookQty();
  removeFromCart(){
    
    this.cartService.remove(this.book);
  }

  getQty(){
    return this.cartService.getBookQty(this.book.name);
  }

}
