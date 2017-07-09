import { Component, OnInit } from '@angular/core';
import {CarListService} from "../services/car-list.service";
import { Car } from "../models/Car";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  carList: Car[];
  errorMessage: string;

  constructor (private carListService: CarListService) {}

  ngOnInit() { this.getCarList(); }

  getCarList() {
    this.carListService.getCars()
      .subscribe(
        cars => this.carList = cars,
        error =>  this.errorMessage = <any>error);
  }

}
