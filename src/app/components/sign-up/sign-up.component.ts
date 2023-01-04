import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private _route:Router, private _http:HttpClient) { }
  signup:FormGroup|any
  
  ngOnInit(): void {
    this.signup = new FormGroup({
      'name': new FormControl(),
      'mobile': new FormControl(),
      'email': new FormControl(),
      'password': new FormControl(),
    })
  }
  signupdata(signup:FormGroup){
      //$ console.log(this.signup.value)
      
      this._http.post<any>("http://localhost:3000/signUp",this.signup.value)
      .subscribe(res=>{
        alert("Registration Successfull")
        this.signup.reset();
        this._route.navigate(['LogIn'])
      },err=>{
        alert("Somthing Went Rong")
      }
      )
      
      }
  }

