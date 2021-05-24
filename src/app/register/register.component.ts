import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uname = "";
  accno = "";
  pswd = "";
  registerForm = this.fb.group({
    uname: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    accno: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(6), Validators.pattern('[0-9]*')]],
    pswd: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
  });
  constructor(private dataService: DataService, private router: Router, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  register() {
    //alert("success")
    //if (this.registerForm.get('uname')?.errors) {
      //alert("Invalid user name")
    //}
    if(this.registerForm.valid){
      this.dataService.register(this.registerForm.value.accno, this.registerForm.value.uname, this.registerForm.value.pswd)
      .subscribe(data=>{ 
        if(data){
          alert("reg sucess,pls login");
          this.router.navigateByUrl("");
        }
      },(data)=>{   
        alert(data.error.message)
      })
      
    }

    else {
      alert("Invalid Form")
    }
  }
}
