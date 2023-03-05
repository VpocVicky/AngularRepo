import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'my-comp',
    templateUrl : './external.html'

})

export class Mycomponent {
    
    @Input()
    message:any;

    @Output()
    value = new EventEmitter();

    sendData(data:any){
       this.value.emit(data);
    }
    // myMethod(userI:string){
    //     alert("Button is clicke.."+userI);
    // }

    // add (n1:string, n2:string){

    //     let sum:number = parseInt(n1) + parseInt(n2);
    //     document.write("Result :: " +sum);
    // }

    // substraction (n1:string, n2:string){

    //     let sum:number = parseInt(n1) - parseInt(n2);
    //     document.write("Result :: " +sum);
    // }

    // multiply (n1:string, n2:string){

    //     let sum:number = parseInt(n1) * parseInt(n2);
    //     document.write("Result :: " +sum);
 
    // }
    // division (n1:string, n2:string){

    //     let sum:number = parseInt(n1) / parseInt(n2);
    //     document.write("Result :: " +sum);
    // }

}