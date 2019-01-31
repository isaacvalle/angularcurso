import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'Default',
  templateUrl: './default.component.html',
  providers: [UserService]
})
export class DefaultComponent implements OnInit{
  public title:string;

  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private _userServ: UserService) {
    this.title = "Inicio";
  }

  ngOnInit() {
    console.log("Default.Component cargado correctamente!")
  }
}
