import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }


  autenticar(){

    return this.http.post('https://sandbox.conpay.com.br/v2/auth/token',{

        accessKeyId: "f9f3baae53d7490dbde09f223b820714",
        secretKey: "$Z<;8[ny!4hBM8::"

    })
  }







}
