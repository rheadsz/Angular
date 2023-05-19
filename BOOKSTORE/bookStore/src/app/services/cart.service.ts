import { Injectable } from '@angular/core';
import { Book } from '../type/Book';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Book[] = [];  //array containing books in the cart
  total: number[]=[]; //array that stores the prices of books present in the cart
  final_price: number = 0;
  index: number = -1;
 map_value_field: number = 0;

  //creating a map with book names and their occurence
  //bookQty: Map<Book,number> = new Map([]);

  bookQty = new Map<string, number>([
    ["key1", 1],
    ["key2", 2],
  
]);



  constructor() { }

  add(book: Book){
    if(this.bookQty.has(book.name)){  //checks if book is present in the map
      //this.total.push(book.amount);   amt is added to the list "total"
      this.index = this.total.indexOf(book.amount);   //gets index of the amount
      this.total[this.index] += book.amount;          //updates the value at that index
      this.bookQty.set(book.name,this.map_value_field+=1);  //update book qty by 1
      console.log(this.bookQty);
      
    }
    else{   //if book is not present in the map
      console.log("The book added is: ",book);  
      this.total.push(book.amount);
      this.cart.push(book);   //book pushed in the cart
      this.bookQty.set(book.name,this.map_value_field=1);   //qty set to 1
      console.log(this.bookQty); 
    }  
  }

  remove(book: Book){
    if(this.bookQty.has(book.name)){
      console.log("The book removed is:  ",book);
      this.index = this.total.indexOf(book.amount);
      this.total.splice(this.index,1);    //removes element at the index
      this.cart = this.cart.filter(item => item !== book);
      this.bookQty.delete(book.name);
    }else{
      console.log("The book removed is not present in the cart");
    }  
  }

  getTotal(){
    this.final_price = this.total.reduce((a, b) => a + b, 0);
    return this.final_price; 
 }

 
  getBookQty(bookName: string){
    return this.bookQty.get(bookName);
  }

  get(){
    return this.cart;   
  }
 
}
