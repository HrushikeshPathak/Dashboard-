import {Company} from './company.model';
import { Injectable } from '@angular/core';
import { map} from'rxjs/operators';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanydataService{
constructor(private http:HttpClient){}
company:Company[]=[];


getCompany(){
  return this.http.get<Company[]>('https://dashboard-f2bdd-default-rtdb.firebaseio.com/company.json')
  .pipe(map(data=>{
    for(let key in data){
      this.company.push(data[key]);
    }
      return this.company;     
   })) 
}

}
