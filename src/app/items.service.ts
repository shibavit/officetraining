import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  text: string;
  constructor() { }

  items = [ {
    id:"item1",
    price:20,
    qty:1,
    text : "Add to cart"
},
{
  id:"item2",
  price:30,
  qty:2,
  text : "Add to cart"
},
{
  id:"item3",
  price:10,
  qty:3,
  text : "Add to cart"
}
];
}
