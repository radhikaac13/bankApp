import { registerLocaleData } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  CurrentUser:any
  currentAcno:any
  db:any={
    1000:{"acno":1000,"username":"neer","password":1000,"balance":5000,transaction:[]},
    1001:{"acno":1001,"username":"naira","password":1001,"balance":3000,transaction:[]},
    1002:{"acno":1002,"username":"neel","password":1002,"balance":6000,transaction:[]},
    1003:{"acno":1003,"username":"nova","password":1003,"balance":2000,transaction:[]}
 
 
 }

  constructor() { 
    this.getDetails()
  }
//get details from local storage
getDetails(){
  if(localStorage.getItem("database")){
    this.db=JSON.parse(localStorage.getItem("database")|| '')
  }
  if(localStorage.getItem("currentuser")){
    this.CurrentUser=JSON.parse(localStorage.getItem("currentuser")|| '')

  }
  if(localStorage.getItem("currentAcno")){
    this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")|| '')

  }
}

//saving details to local storage
  saveDetails(){
    if(this.db){
      localStorage.setItem("database",JSON.stringify(this.db))
    }
    if(this.CurrentUser){
      localStorage.setItem("currentuser",JSON.stringify(this.CurrentUser))
    }
    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
    }

  }
  //login
  login(acno:any,pswd:any){
   
    let db=this.db
    if(acno in db)
    {
      if(pswd==db[acno]["password"]){
        this.CurrentUser=db[acno]["username"]
        this.currentAcno=acno
        this.saveDetails()
         return true
      }
      else{
        alert("Incorrect password")
        return false
      }
    }
    else{
      alert("User does not exist")
      return false
    }
   }
  
   //register
   register(username:any,acno:any,password:any){
     let  db=this.db
     if(acno in db){
       return false
     }
     else
     {
       //insert in db
       db[acno]={
        acno,
        username,
        password,
        "balance":0,
        transaction:[]
       }
       console.log(db);
       this.saveDetails()
       return true
     }

   }
   //deposit
   deposit(acno:any,password:any,amt:any){
     var amount=parseInt(amt)
    let  db=this.db
    if(acno in db){
       if(password ==db[acno]["password"]){
           db[acno]["balance"]+=amount
           db[acno].transaction.push({
             type:"CREDIT",
            amount:amount     
                })
                  this.saveDetails()

           return db[acno]["balance"]
       }
       else{
         alert("incorrect password")
         return false
       }
    }
    else{
      alert("user does not exist")
      return false
    }

   }
   //withdraw
   withdraw(acno:any,password:any,amt:any){
    var amount=parseInt(amt)
    let  db=this.db
    if(acno in db){
       if(password ==db[acno]["password"]){
         if(db[acno]["balance"]>amount){
          db[acno]["balance"]-=amount
          db[acno].transaction.push({
            type:"DEBIT",
           amount:amount     
               })
          this.saveDetails()

          return db[acno]["balance"]
         }
         else{
          alert("insufficient balance")
          return false
         }
           
       }
       else{
         alert("incorrect password")
         return false
       }
    }
    else{
      alert("user does not exist")
      return false
    }
   }
   getTransaction(acno:any){
     return this.db[acno].transaction
   }
}



