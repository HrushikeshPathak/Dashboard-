import { Component, OnInit, Pipe } from '@angular/core';
import { CompanydataService} from '../companydata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[CompanydataService]

})
export class HomeComponent implements OnInit  {
  
  constructor(private cservice: CompanydataService) {}
  
  company;
  term;
  Companies=this.cservice.company;
  
  
  ngOnInit(){}
  getCompany(){
      this.cservice.getCompany()
    .subscribe(companies =>this.Companies=companies);
    
     }
   
    }
   
  

    

    

