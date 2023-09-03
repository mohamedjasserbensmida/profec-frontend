import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { User } from "../../modules/user";
import { MessageService } from "primeng/api";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MessageService]
})
export class ProfileComponent implements OnInit {
  showEmail: boolean = false;
  Message!: string;
  principal!: User;
  id!: string;
  idPrincipal!: number;
  editProfileD: boolean = false;
  submitted: boolean = false;
  form: FormGroup;
  form2: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private messageService: MessageService) {
    this.form = this.formBuilder.group({
      oldpassword: this.formBuilder.control(null, [Validators.required]),
      password: this.formBuilder.control(null, [Validators.required]),
      password2: this.formBuilder.control(null, [Validators.required]),
    });
    this.form2 = this.formBuilder.group({
      to: this.formBuilder.control(null, [Validators.required]),
      subject: this.formBuilder.control(null, [Validators.required]),
      body: this.formBuilder.control(null, [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.id = this.auth.getFromLocalStronge("id")!;
    this.idPrincipal = +this.id;
    this.getPrincipal();
  }

  get showEmailSection() {
    return this.showEmail;
  }

  set showEmailSection(value: boolean) {
    this.showEmail = value;
  }

  getPrincipal() {
    this.auth.getPrincipal(this.idPrincipal).subscribe({
      next: (data) => {
        this.principal = data;
        console.log(this.principal)
      }, error: (err) => {
        console.log(err);
      }
    });
  }

  edit() {
    this.submitted = true;
    if (this.principal.nomUser && this.principal.emailUser && this.principal.numdetelUser) {
      this.auth.editPrincipal(this.idPrincipal, this.principal).subscribe({
        next: (data) => {
          this.editProfileD = false;
          this.submitted = false;
          this.messageService.add({ severity: 'info', summary: 'Info Message', detail: data, life: 3000 });
        }, error: (err) => {
          console.log(err);
        }
      });
    }
  }

  changePassword() {
    this.auth.changePassword(this.idPrincipal, this.form.value).subscribe({
      next: (data) => {
        this.Message = data;
        if (data === "password changed") {
          this.form.reset();
        }
      }, error: (err) => {
        console.log(err);
      }
    })
  }

  sendEmail() {
    console.log(this.form2.value);
    this.auth.sendEmail(this.form2.value).subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: "The email has been sent successfully.", life: 3000 });
        this.form2.reset();
      }, error: (err) => {

      }
    })
  }
}
