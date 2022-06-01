import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  //properties
 accno="Account number please"
 aim="perfect banking partner"
 acno=""
 pswd=""
 
//databinding--> sharing data from html to ts vice versa--2 type 
//1.one way binding(html to ts or ts to html)
     //1.1 component to view(ts to html)

     //1.1.1 to share data from ts to html-->string interpolation --syntax {{variable}} ie,put 2 {} on variable in html
    // 1.1.2 property binding-->variable declared in ts can be used as an attribute in html--syntax->[attribute]="variable-name"
    //1.2 view to component(html to ts)

    //1.2.1 event binding->binding events that can be happend on that tag--(event)="function-call()"
    //1.2.2 event binding using $event-(event)="function-call($event)"
    //"this" is a key used to get the variables declared in class
    //1.2.3 template referencing variable-->syntax--#variable-name
//2.two way binding(html to ts and ts to html)
    //2.1 using ngModel--importing formModule in appModule, syntax--[(ngModel)]="variable-name"-this command put in html and the variable name should be declared in ts file
    //2.2 dependency injection--to share data between classes


    //angular services--to reuse data
    //ngSubmit-to submit entire form

    //angular forms
    //1.template driven forms-creating html page
    //2.model driven forms--model creating on ts and link with html-example:reactive forms(we can add validation)
    //library for reactive forms-->ReactiveFormsModule
          //to create reactive form
              //1.first import it
              //2.shoukd contain form group-"FormBuilder" dependecy inject,form array,form control


    //database
//database created as document ie,key value pairs

    
  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

//user defined function

acnoChange(event:any){
 this.acno=event.target.value
 console.log(this.acno);
 
 
}
pswdChange(event:any){
  this.pswd=event.target.value
  console.log(this.pswd);
  
  
 }
 login(){
  var acno=this.acno
  var pswd=this.pswd
  const result=this.ds.login(acno,pswd) //calling login function in data service which is assigned to a variable result
  if(result)
  {
    
      alert("Login successfull")
      this.router.navigateByUrl('dashboard')
    
  }
 }

//template referencing variable

//  login(a:any,p:any){
//    console.log(a.value,p.value);
   
//   var acno=a.value
//   var pswd=p.value
//   let db=this.db
//   if(acno in db)
//   {
//     if(pswd==db[acno]["password"]){
//       alert("Login successfull")
//     }
//     else{
//       alert("invalid password")
//     }
//   }
//   else{
//     alert("User does not exist")
//   }
//  }
 }
