import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';
import { GLOBAL } from "./global";
import { Car } from "../models/car";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  public url:string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  pruebas() {
    return "hola mundo";
  }

  create(car:Car, token:any): Observable<any> {
    let json = JSON.stringify(car);
    let params = "json=" + json;
    let headers = new HttpHeaders()
                  .set('Content-Type', 'application/x-www-form-urlencoded')
                  .set('Authorization', token);

    return this._http.post(this.url + 'cars', params, {headers: headers});
  }

  getCars(): Observable<any> {
    let headers = new HttpHeaders()
                  .set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'cars', {headers: headers})
  }
}
