import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user";
import { Car } from "../../models/car";
import { UserService } from "../../services/user.service";
import { CarService } from "../../services/car.service";

@Component({
  selector: 'Default',
  templateUrl: './default.component.html',
  providers: [UserService, CarService]
})
export class DefaultComponent implements OnInit{
  public title:string;
  cars:Array<Car>;

  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private _userServ: UserService,
              private _carServ: CarService) {
    this.title = "Inicio";
  }

  ngOnInit() {
    console.log("Default.Component cargado correctamente!")
    this._carServ.getCars().subscribe(
      response => {
        if (response.status == 'success') {
          this.cars = response.cars;
        }
      },
      error => {
        console.log(error)

      }
    )
  }
}
