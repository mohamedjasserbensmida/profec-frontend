import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit{


  Form:FormGroup;
  message!:string;
  constructor(private Auth:AuthService,private formBuilder:FormBuilder) {
    this.Form=this.formBuilder.group({
      email:this.formBuilder.control(null,[Validators.required , Validators.email]),
    });
  }

  ngOnInit(): void {
  }

  forgotPss() {
    this.Auth.forgotPassword(this.Form.value.email).subscribe({
      next:(data)=>{
        this.message=data;
      },error:(err)=>{
        console.log(err)
      }
    });
  }
}
