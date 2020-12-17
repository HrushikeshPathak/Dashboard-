import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Company} from '../company.model';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  addcompanyForm: FormGroup;
  
  constructor( private http:HttpClient) { }   
company:Company[]=[];
  ngOnInit(): void {
    this.addcompanyForm = new FormGroup({
      'companyname': new FormControl(null),
      'industry': new FormControl(null),      
      'totalsale': new FormControl(null)
    });
  }
  onAddcompany(){
    this.http.post('https://dashboard-f2bdd-default-rtdb.firebaseio.com/company.json',(this.addcompanyForm.value)) 

    .subscribe(data=>console.log(data));
}
}
  

    
  
  
 

 
     
  


