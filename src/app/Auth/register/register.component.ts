import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  Form:FormGroup;
  message!:string;
  constructor(private formBuilder:FormBuilder, private auth:AuthService ) {
    this.Form=this.formBuilder.group({
      name:this.formBuilder.control(null,[Validators.required]),
      email:this.formBuilder.control(null,[Validators.required , Validators.email]),
      phoneNumber:this.formBuilder.control(null,[Validators.required,Validators.pattern(/^\d{8}$/)]),
      password:this.formBuilder.control(null,[Validators.required]),
      role:this.formBuilder.control(null,[Validators.required,Validators.pattern(/^(employee)$/)]),

    })
  }


    ngOnInit(){

    }

  createAccount() {
    this.auth.createAccount(this.Form.value).subscribe({
      next:(data)=>{
       this.Form.reset();
       this.message='Account Created';
      },error:(err)=>{
        console.log(err);
      }
    });
  }

}
