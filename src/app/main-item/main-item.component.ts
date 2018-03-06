import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-item',
  templateUrl: './main-item.component.html',
  styleUrls: ['./main-item.component.css']
})
export class MainItemComponent implements OnInit {
  parmListName = "";

  itemName = [];

  newItemName = " ";

  pushItemName = function() {
    if(this.newItemName != ""){
      this.itemName.push(this.newItemName);
      this.newItemName = "";
    }
  };


  removeItem(item, index){
    console.log("value of the selected item to delete", item +"its id is"+ index);
    this.itemName.splice(index, 1);
  }

  constructor( private route : ActivatedRoute) { }

  ngOnInit() {
    let name = this.route.snapshot.params['name'];
    this.parmListName = name;
  }

}
