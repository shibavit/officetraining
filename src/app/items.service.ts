import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  items = [ {
    id:"item1",
    price:20,
    qty:1
},
{
  id:"item2",
  price:30,
  qty:2
},
{
  id:"item3",
  price:10,
  qty:3
}
];
}
