import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Welcome";
  accno = "account no pls";
  pswd = "";
  //form group
  loginForm = this.lg.group({
    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.pattern('[a-zA-Z0-9]*')]]

  })
  constructor(private router: Router, private dataService: DataService, private lg: FormBuilder) { }

  ngOnInit(): void {
  }
  getAccountnumber(event: any) {
    this.accno = event.target.value;
    //console.log(this.accno); 
  }
  pswdchange(event: any) {
    this.pswd = event.target.value;
    // console.log(this.pswd);

  }
  // login(a:any,p:any)  {
  //alert("login works");

  // let accnumber = a.value;
  //  let pwd = p.value;
  login() {
    // console.log(this.loginForm.value);
    if (this.loginForm.valid) {
     // alert("form valid")
     let accnumber = this.loginForm.value.accno;
     console.log(accnumber);
 
     let pwd = this.loginForm.value.pswd;
     console.log(pwd);
     this.dataService.login(accnumber,pwd)
     .subscribe((data:any)=>{
      if(data){
        alert("login sucess");
        //alert(data.name);
        localStorage.setItem("name",data.name)
        localStorage.setItem("acno",data.acno)
        this.router.navigateByUrl("dashboard");
      }
    },(data)=>{
      alert(data.error.message)
    })

    //  if(result){
    //    this.router.navigateByUrl("dashboard")
    //  }
    }
    else{
      alert("invalid form")
    }
  }
}   




 
    



