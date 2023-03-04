import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  result:string = "";
  formValidation(userName:string,password:string){
    if(userName===password){
      this.result = "Welcome "+userName+"";
    }else{
      this.result = "Login Failed";
    }
  }

}
