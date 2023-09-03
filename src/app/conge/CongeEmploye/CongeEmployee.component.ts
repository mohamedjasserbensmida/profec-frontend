import {Component, OnInit} from '@angular/core';
import {CongeService} from "../../services/conge.service";
import {Conge} from "../../modules/Conge";
import {AuthService} from "../../services/auth.service";
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-usersreclamation',
  templateUrl: './CongeEmployee.component.html',
  styleUrls: ['./CongeEmployee.component.css'],
  providers: [MessageService]
})
export class UsersreclamationComponent implements OnInit{

  principalReclamations:Conge[]=[];
  princialId!:string;
  id!:number;
  descReclamation:boolean=false;
  description!:string;
  addReclamation:boolean=false;
  newReclamation:Conge={};
  submitted:boolean=false;
  updateOption:boolean=false;
  types:string[];
  idToDelete!:number;
  deleteDialog:boolean=false;
  constructor(private reclamationService:CongeService,private auth:AuthService,private messageService:MessageService) {
    this.types=["Payé","Non_Paye","Maladie"];
  }

  ngOnInit(): void {
    this.princialId=this.auth.getFromLocalStronge("id")!;
    this.id=+this.princialId;
    this.getPrincipalReclamations();
  }

  getPrincipalReclamations(){
    this.reclamationService.getPrincipalConge(this.id).subscribe({
      next:(data)=>{
        console.log(data);
        this.principalReclamations=data;
      },error:(err)=>{
        console.log(err);
      }
    });
  }
  clear(table: Table) {
    table.clear();
  }
  showDescr(typeReclamation: string) {
    this.description=typeReclamation;
    this.descReclamation=true;
  }


  addNewReclamation() {
    this.submitted=true;
    if(this.newReclamation.typeConge&&this.newReclamation.description){
      this.reclamationService.addNewConge(this.newReclamation,this.id).subscribe({
        next:(data)=>{
          this.submitted=false;
          this.newReclamation={};
          this.addReclamation=false;
          this.getPrincipalReclamations();
          this.messageService.add({severity:'info',summary:'Info Message',detail:'Congé Ajoutee',data,life:3000});
        },error:(err)=>{
          console.log(err);
        }
      });
    }
  }


  deletConges(id:number) {
    this.idToDelete=id;
    this.deleteDialog=true;

  }

  ConfirmDelete() {
    this.reclamationService.deleteConge(this.idToDelete).subscribe({
      next:(data)=>{
        this.deleteDialog=false;
        this.getPrincipalReclamations();
        this.messageService.add({severity:'info',summary:'Info Message',detail:'Congé Suprrimé',data,life:3000});
      },error:(err)=>{
        console.log(err);
      }
    })
  }

  updateReclamation(reclamation: Conge) {
    this.newReclamation=reclamation;
    this.addReclamation=true;
    this.updateOption=true;
  }


  update() {
    this.submitted=true;
    if(this.newReclamation.typeConge&&this.newReclamation.description){
      this.reclamationService.updateConge(this.newReclamation).subscribe({
        next:(data)=>{
          this.addReclamation=false;
          this.submitted=false;
          this.newReclamation={};
          this.updateOption=false;
          this.getPrincipalReclamations();
          this.messageService.add({severity:'info',summary:'Info Message',detail:'Congé Modifie',data,life:3000})
        },error:(err)=>{
          console.log(err);
        }
      });
    }
  }
}
