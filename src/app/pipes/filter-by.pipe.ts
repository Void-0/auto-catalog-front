import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../models/Car";

@Pipe({
  name: 'filterBy'
})
export class FilterByPipe implements PipeTransform {

  transform(array: Array<Car>, type: string, value: string): Array<Car> {
    // this filter needs to be used on valid arrays with both arguments present

    return array && type && value ? array.filter((car: Car) => {
      return car[type] === value;
    }) : array;
  }
}
