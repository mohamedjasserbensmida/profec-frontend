import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  Form:FormGroup;
  message!:string;
  constructor(private formBuilder:FormBuilder , private router:Router, private auth:AuthService) {
    this.Form=this.formBuilder.group({
      email:this.formBuilder.control(null,[Validators.required]),
      password:this.formBuilder.control(null,[Validators.required])
    })
  }
  ngOnInit(): void {
  }

  login() {
    this.auth.login(this.Form.value).subscribe({
      next:(data)=>{
        this.auth.setToLocalStorage("token",data.token);
        this.auth.setToLocalStorage("id",data.id);
        this.auth.setToLocalStorage("role",data.role);
        if(data.role==='admin'){
          this.router.navigate(["/home/user/usersManagement"]);
        }else{
          this.router.navigate(["/home/user/profile"])
        }

      },error:(err)=>{
        if(err.status==401){
        this.message='Bad Credential';
        }
      }
    });
  }
}
