import { Pipe, PipeTransform } from '@angular/core';
import {Car} from "../models/Car";

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(array: Array<Car>, args: string): Array<Car> {
    if(array) {
      array.sort((a: Car, b: Car) => {
        if (a[args] < b[args]) {
          return -1;
        } else if (a[args] > b[args]) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return array;
  }
}
