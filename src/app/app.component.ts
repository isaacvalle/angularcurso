import { Component, OnInit } from '@angular/core';
import { UserService } from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'client-angular';
  public identity:any;
  public token:any;

  constructor(private _userServ: UserService) {
    this.identity = this._userServ.getIdentity();
    this.token = this._userServ.getToken();
  }

  ngOnInit() {
    // console.log("app.omponent cargado!")
    if (this.identity) {
      console.log("variable en identity")
    }else {
      console.log("no existe identity")
    }
  }
}
