import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router/src/directives/router_link';
import { Router } from '@angular/router'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSubmit( value:any ){
    console.log("user form input values", value)
    this.router.navigate(['/table/list'])
     }

}
