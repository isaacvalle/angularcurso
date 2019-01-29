import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user";

@Component({
  selector: 'register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit{
  public title:string;
  public user:User;

  constructor(
    // private _route:ActivatedRoute,
    //           private _router: Router
            ) {
    this.title = "Regístrate";
    this.user = new User(1, 'PORLE_USER', '', '', '', '');
  }

  ngOnInit() {
    console.log("Register.Component cargado correctamente!")
  }
}
