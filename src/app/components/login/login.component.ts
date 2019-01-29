import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  public title:string;

  // implement OnInit's `ngOnInit` method

  constructor(
    // private _route:ActivatedRoute,
    //           private _router: Router
            ) {
    this.title = "identifícate";
  }

  ngOnInit() {
    console.log("Login.Component cargado correctamente!")
  }
}
