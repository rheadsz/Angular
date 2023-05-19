import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {

  constructor() { }

  getBooks(){
    return [{
      name : 'Inferno',
      author: 'Dan Brown',
      image: 'https://m.media-amazon.com/images/I/51OAESHPy0L._SY344_BO1,204,203,200_.jpg',
      amount: 700,

  },
  {
    name : 'Harry Potter and the half blood prince',
    author: 'J.K Rowling',
    image: 'https://m.media-amazon.com/images/I/81p2+4nYtkL._AC_UY327_FMwebp_QL65_.jpg',
    amount: 450,

},
{
  name : 'Ikigai',
  author: 'Garcia, Hector',
  image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
  amount: 450,

},
{
  name : 'The Diary Of A Young Girl',
  author: 'Anne Frank',
  image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/41zswOGxk9S._SX460_BO1,204,203,200_.jpg',
  amount: 450,

},
{
  name : 'The Theory of everything',
  author: 'Stephen Hawking',
  image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51oHUvYzbsL._SX327_BO1,204,203,200_.jpg',
  amount: 450,

},
{
  name : 'The book thief',
  author: 'Marcus',
  image: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/51APkyJzNlL._SY344_BO1,204,203,200_.jpg',
  amount: 450,

},
];
  }
}
