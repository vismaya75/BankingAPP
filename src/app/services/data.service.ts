import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

const options={ //to acess cookies
  withCredentials:true
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  accountDetails: any = {
    1000: { acno: 1000, username: "vismaya", balance: 5000, password: "user1" },
    1001: { acno: 1001, username: "Akhil", balance: 3000, password: "user2" },
    1002: { acno: 1002, username: "Athul", balance: 6000, password: "user3" },
    1003: { acno: 1003, username: "Devika", balance: 9000, password: "user4" },
    1004: { acno: 1004, username: "Aswathi", balance: 7000, password: "user5" }
  }
  currentUser: any;


  constructor(private http:HttpClient) {
    this.getDetails();
  }
  saveDetails() {
    localStorage.setItem("accountDetails", JSON.stringify(this.accountDetails))
    if(this.currentUser){
    localStorage.setItem("currentUser", JSON.stringify(this.currentUser))
    }
  }
  getDetails() {
    if(localStorage.getItem("accountDetails")){
    this.accountDetails =JSON.parse (localStorage.getItem("accountDetails")||'')
    }
    if(localStorage.getItem("currentUser")){
    this.currentUser = JSON.parse(localStorage.getItem("currentUser")||'')
    }

  }

  register(acno: any, username: any, password: any) {
    const data = {
      acno,
      username,
      balance: 0,
      password

    }
   return this.http.post(environment.apiUrl+"/register",data)
  // return this.http.post("http://localhost:2000/register",data)



  //   if (acno in this.accountDetails) {
  //     alert("user already exist.Plz login")
  //     return false;
  //   }
    
  //   this.saveDetails();
  //   alert("Registration Success")
  //   console.log(this.accountDetails);
  //   return true;


  }
  login(acno: any, password: any) {
    const data = {
      acno,
      password
    }
   return this.http.post(environment.apiUrl+"/login",data,options)
  //return this.http.post("http://localhost:2000/login",data,options)

   
    // let dataset = this.accountDetails;
    // if (accno in dataset) {
    //   var pswd1 = dataset[accno].password;

    //   if (pswd1 == pwd) {
    //     this.currentUser = dataset[accno].username;
    //     this.saveDetails();
    //     alert("login success")
    //     return true
    //   }
    //   else {
    //     alert("incorrect password")
    //     return false
    //   }
    // }
    // else {
    //   alert("no user in the existine account no")
    //   return false
    // }

  }

  deposit(acno: any, password: any, amount: any) {
    const data = {
      acno,
      password,
      amount
    }
   return this.http.post(environment.apiUrl+"/deposit",data,options)
  //return this.http.post("http://localhost:2000/deposit",data,options)

   

    // var amount = parseInt(amt)
    // let dataset = this.accountDetails;
    // if (accno in dataset) {
    //   var pswd1 = dataset[accno].password;

    //   if (pswd1 == pwd) {
    //     dataset[accno].balance += amount
    //     this.saveDetails();
    //     alert("Amount credicted with amount:" + amt + " New balance is:" + dataset[accno].balance);

    //   }
    //   else {
    //     alert("incorrect password")

    //   }
    // }
    // else {
    //   alert("no user in the existine account no")

    // }

  }
  deleteAccDetails(acno:any){
    return this.http.delete(environment.apiUrl+"/deleteAccDetails/"+acno,options)

   
  }

  withdraw(acno: any, password: any, amount: any) {
    const data = {
      acno,
      password,
      amount
    }
   return this.http.post(environment.apiUrl+"/withdraw",data,options)
   //return this.http.post("http://localhost:2000/withdraw",data,options)

    // var amount = parseInt(amt)
    // let dataset = this.accountDetails;
    // let amnt = dataset[accno].balance
    // if (accno in dataset) {
    //   var pswd1 = dataset[accno].password;

    //   if (pswd1 == pwd) {
    //     if (amnt >= amount) {
    //       dataset[accno].balance -= amount
    //       this.saveDetails();

    //       alert("Amount debited with amount:" + amt + ", New balance is:" + dataset[accno].balance);

    //     }
    //     else {
    //       alert("low balance")
    //     }
    //   }
    //   else {
    //     alert("incorrect password")

    //   }
    // }
    // else {
    //   alert("no user in the existine account no")

    // }

  }

}
