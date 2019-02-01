import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Car } from "../../models/car";
import { UserService } from "../../services/user.service";
import { CarService } from "../../services/car.service";

@Component({
  selector: 'app-car-new',
  templateUrl: './car-new.component.html',
  styleUrls: ['./car-new.component.scss'],
  providers: [UserService, CarService]
})
export class CarNewComponent implements OnInit {
  pageTitle:string;
  identity:any;
  token:any;
  car:Car;
  statusCar:string;

  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private _userServ: UserService,
              private _carServ: CarService) {
    this.pageTitle = 'Crea un nuevo coche';

    this.identity = this._userServ.getIdentity();
    this.token = this._userServ.getToken();
  }

  ngOnInit() {
    if(this.identity == null) {
      this._router.navigate(['/login']);
    }else {
      // Crear el objeto del coche
      this.car = new Car(1, '', '', 1, '', null, null);
    }
  }

  onSubmit(form) {
    this._carServ.create(this.car, this.token).subscribe(
      response => {
        console.log(response)
        if(response.status == 'success') {
          this.car = response.car;
          this.statusCar = 'success';
          this._router.navigate(['/inicio']);
        }else {
          this.statusCar = 'error';
        }
      },
      error => {
        this.statusCar = 'error';
      }
    );
  }
}
