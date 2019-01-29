import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  providers: [UserService]
})
export class RegisterComponent implements OnInit{
  public title:string;
  public user:User;
  public status:string;

  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private _userServ: UserService) {
    this.title = "Regístrate";
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
  }

  ngOnInit() {
    console.log("Register.Component cargado correctamente!")
  }

  onSubmit(form:any) {
    this._userServ.register(this.user).subscribe(
      response => {
        if(response.status == 'success') {
          this.status = response.status;

          this.user = new User(1, 'ROLE_USER', '', '', '', '');
          form.reset();
        }else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }
}
