import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  todoList = [{
    itemName : 'Buy Groceries',
    itemDueDate : '31-11-21',
    itemPriority : 'high',
    itemCategory : 'home'
     }
            
            ]
  constructor() {}
  
  today = Date.now();
}
