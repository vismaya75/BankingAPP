import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  accno="";
  pswd="";
  amt="";

  depositForm=this.fb.group({
    accno:['', [Validators.required, Validators.minLength(4), Validators.maxLength(6), Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['', [Validators.required, Validators.pattern('[0-9]*')]]
  })

  withdrawForm=this.fb.group({
    accno:['', [Validators.required, Validators.minLength(4), Validators.maxLength(6), Validators.pattern('[0-9]*')]],
    pswd:['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]],
    amt:['', [Validators.required, Validators.pattern('[0-9]*')]]
  })
  id="1234";
  name:any
  acno:any
  accDelete:any
  lLogin:Date = new Date()
  constructor(private router:Router, private fb:FormBuilder,public dataService:DataService) { 
   this.name=localStorage.getItem("name")
  }

  ngOnInit(): void {
  }
  deposit(){
    if(this.depositForm.valid){
     this.dataService.deposit(this.depositForm.value.accno,this.depositForm.value.pswd,this.depositForm.value.amt)
     .subscribe((data:any)=>{
       if(data){
         alert(data.message)
         alert(data.balance)
       }
     },(data)=>{
       alert(data.error.message)
     })
    }
    else{
      alert("invalid form")
    }

    
  }
  withdraw(){
    if(this.withdrawForm.valid){
      this.dataService.withdraw(this.withdrawForm.value.accno,this.withdrawForm.value.pswd,this.withdrawForm.value.amt)
      .subscribe((data:any)=>{
        if(data){
          alert(data.message)
          alert(data.balance)
        }
      },(data)=>{
        alert(data.error.message)
      })
    }
     else{
       alert("invalid form")
     }
    

  }
  delete(){
    this.acno=localStorage.getItem("acno")
   // alert(this.acno);
  }
  onDelete($event:any){
    this.accDelete=$event;
    //alert("this is alert from parent:"+$event);
    this.dataService.deleteAccDetails($event)
    .subscribe((data:any)=>{
      if(data){
        alert(data.message)
       // this.acno=null;
       this.router.navigateByUrl("");
        
      }
    this.acno=null;
  })
  }
  onCancel(){
   this.acno=null;
  }
} 
  
