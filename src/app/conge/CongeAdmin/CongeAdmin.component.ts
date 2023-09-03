import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../modules/user";
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";
import {email, Conge} from "../../modules/Conge";
import {CongeService} from "../../services/conge.service";

@Component({
  selector: 'app-reclamationmanagement',
  templateUrl: './CongeAdmin.component.html',
  styleUrls: ['./CongeAdmin.component.css'],
  providers : [MessageService]
})
export class CongemanagementComponent implements OnInit{

  reclamations:Conge[]=[];
  descReclamation:boolean=false;
  description!:string;
  emaildial:boolean=false;
  emailx:email={};
  submitted:boolean=false;
  constructor(private reclamationService:CongeService , private messageService:MessageService , private auth : AuthService) {
  }

  ngOnInit(): void {
   this.getAllConge();
  }


  clear(table: Table) {
    table.clear();
  }

  getAllConge(){
    this.reclamationService.getAllConge().subscribe({
      next:(data)=>{
        this.reclamations=data;
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  showDescr(description: string) {
  this.description=description;
  this.descReclamation=true;
  }

  SendEmail(to:string) {
    this.emailx.to=to;
    this.emaildial=true;
  }

  send() {
    this.submitted=true;
    if(this.emailx.to&&this.emailx.subject&&this.emailx.body){
      this.auth.sendEmailRec(this.emailx).subscribe({
        next:(data)=>{
          this.submitted=false;
          this.emailx={};
          this.emaildial=false;
          this.messageService.add({severity:'info',summary:'Info Message',detail:"Email has been sended successfully",life:3000});
        },error:(err)=>{
          console.log(err);
        }
      });
    }
  }
}
