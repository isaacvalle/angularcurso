import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit{
  public title:string;
  public user:User;
  public token:any;
  public identity:any;
  public status:string;

  constructor(private _route:ActivatedRoute,
              private _router: Router,
              private _userServ: UserService) {
    this.title = "identifícate";
    this.user = new User(1, 'ROLE_USER', '', '', '', '');
  }

  ngOnInit() {
    // console.log("Login.Component cargado correctamente!")
    this.logOut();
  }

  onSubmit(form) {
    console.log(this.user)
    this._userServ.signUp(this.user).subscribe(
      response => {
        if(response.status != 'error') {
          this.status = 'success';
          //token
          this.token = response;
          localStorage.setItem('token', this.token);
          //conseguir objeto de usuario identidicado
          this._userServ.signUp(this.user, true).subscribe(
            response => {
              this.identity = response;
              localStorage.setItem('identity', JSON.stringify(this.identity));
              //Redireccion del componente LOGIN
              this._router.navigate(['inicio'])
            },
            error => {
              console.log(<any>error)
            }
          );
        }else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error)
      }
    );
  }

  logOut() {
    this._route.params.subscribe(params => {
      let logOut = +params['sure'];
      if(logOut == 1) {
        localStorage.removeItem('identity');
        localStorage.removeItem('token');

        this.identity = null;
        this.token = null;

        //redireccionamiento
        this._router.navigate(['inicio'])
      }
    })
  }
}
