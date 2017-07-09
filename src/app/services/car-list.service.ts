import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Car } from '../models/Car'

@Injectable()
export class CarListService {
  private carsUrl = 'https://dev.clicktomeat.com/dashboard-backend/api/cars';

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    return this.http.get(this.carsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {

    console.log('--- Getting the data: ', res);

    let body = res.json();

    console.log('--- Getting the json: ', body);

    let carsList = body.map(function (car) {
      return new Car(car);
    });

    console.log('--- Serializing cars: ', carsList);

    return carsList || [];
  }

  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
