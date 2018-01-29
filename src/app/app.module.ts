import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainTableComponent } from './main-table/main-table.component';

const appRoutes: Routes = [
  {path:'home', component: MainPageComponent},
  {path:'table', children : [
     { path:'list', component: MainTableComponent}
  ]},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '/home', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
