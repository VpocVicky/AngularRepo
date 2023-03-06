import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  temp: any;
  getData(receivedData: any) {
    this.temp = receivedData;
  }

  //result: string = "";
  // formValidation(userName: string, password: string) {
  //   if (userName === password) {
  //     this.result = "Welcome " + userName + "";
  //   } else {
  //     this.result = "Login Failed";
  //   }
  // }
  
  promo : string = '';

  getPromotion(promo:any){
    this.promo = promo;
  }
  list:any []= ['Laptop','Iphone','BMW','BOOK'];

  products:any[] = [{"name":"Vicky","Id":12},{"name":"Ayush","Id":13},{"name":"HHima","Id":14}]

  age : number = 0;
  votingVerification(age:any){
    this.age = age;
  }


}

