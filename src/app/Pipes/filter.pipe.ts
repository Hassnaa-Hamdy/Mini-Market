import { Pipe, PipeTransform } from '@angular/core';
import { UrlSerializer } from '@angular/router';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  
  transform(values: any, search:string) {
    if(search ===''){
      return values
    }
    let goods = [];
    for ( let good of values){
      if ( good.name === search){
        goods.push(good)
      }
    }
    return goods
  }
}