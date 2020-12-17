import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AddCompanyComponent} from'./add-company/add-company.component';
import {HomeComponent} from'./home/home.component';




const routes: Routes = [
  {path:"home" , component: HomeComponent},
  {path:"add-company", component: AddCompanyComponent},
  {path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
