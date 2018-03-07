import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> 5263fff7e55b088b188c12edca63288af73a9126

@Component({
  selector: 'app-main-table',
  templateUrl: './main-table.component.html',
  styleUrls: ['./main-table.component.css']
})
export class MainTableComponent implements OnInit {

<<<<<<< HEAD
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
=======
  constructor() { }
>>>>>>> 5263fff7e55b088b188c12edca63288af73a9126

  ngOnInit() {
  }

}
