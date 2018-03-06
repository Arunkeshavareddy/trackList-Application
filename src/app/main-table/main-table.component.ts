import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

  listName = [];

  newListName = " ";

  pushListName = function() {
    if(this.newListName != ""){
      this.listName.push(this.newListName);
      this.newListName = "";
    }
  };

  onSelect(name){
    this.router.navigate(['/table/list-items', name]);
  }

  removeList(name, index){
    console.log("value of the selected item to delete", name +"its id is"+ index);
    this.listName.splice(index, 1);
  }

  constructor(private router : Router) { }

  ngOnInit() {
  }

}
