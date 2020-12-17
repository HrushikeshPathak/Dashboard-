import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(data: any, term: any): any {
    if(term === undefined){
      return data;
    }
    return data.filter(x=>{
      return x.companyname.toLocaleLowerCase().includes(term.toLocaleLowerCase())
    })
  }

}
