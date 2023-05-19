import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from '../../type/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{
  @Input() book: Book = {} as Book;
  isInCart: Boolean = false;

  constructor(private cartService: CartService){

  }

  ngOnInit(){

  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  }
}
