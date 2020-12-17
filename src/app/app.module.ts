import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import {CompanydataService} from './companydata.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from'@angular/common/http';
import { FilterPipe } from './filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AddCompanyComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CompanydataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
