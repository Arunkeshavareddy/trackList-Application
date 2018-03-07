import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes} from '@angular/router'

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainTableComponent } from './main-table/main-table.component';
<<<<<<< HEAD
import { MainItemComponent } from './main-item/main-item.component';
=======
>>>>>>> 5263fff7e55b088b188c12edca63288af73a9126

const appRoutes: Routes = [
  {path:'home', component: MainPageComponent},
  {path:'table', children : [
<<<<<<< HEAD
     { path:'list', component: MainTableComponent},
     { path:'list-items/:name', component: MainItemComponent}
=======
     { path:'list', component: MainTableComponent}
>>>>>>> 5263fff7e55b088b188c12edca63288af73a9126
  ]},
  {path:'', redirectTo: '/home', pathMatch: 'full'},
  {path:'**', redirectTo: '/home', pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
<<<<<<< HEAD
    MainTableComponent,
    MainItemComponent
=======
    MainTableComponent
>>>>>>> 5263fff7e55b088b188c12edca63288af73a9126
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
