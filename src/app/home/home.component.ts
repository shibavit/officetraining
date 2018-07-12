import { Component, OnInit } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  x: any;
  constructor(private item:ItemsService) { }

  ngOnInit() {
  }

  itemget = this.item.items;
addition = 0;
add(i) {
  
  if(i.text == "Add to cart") {
  //alert( (this.item[1].price * this.item[1].qty) + (this.item[2].price * this.item[2].qty) + (this.item[3].price * this.item[3].qty));
   this.addition = this.addition + i.price * i.qty;
   i.text = "Remove from cart";  
  }
  else {
   this.addition = this.addition - i.price * i.qty;
   i.text = "Add to cart";  
  
  }
 
}
}
