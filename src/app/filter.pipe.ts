import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //the default value is true
  //be aware that the following change will make sure that 
  //whenever we change data on te page, our pipe is recalculated you
  //could say. So this might lead to performance issues.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    console.log(value);
    if (value.length === 0 || filterString === ''){
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
