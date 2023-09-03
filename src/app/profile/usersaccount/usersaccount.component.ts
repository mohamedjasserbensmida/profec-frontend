import {Component, OnInit} from '@angular/core';
import {User} from "../../modules/user";
import {AuthService} from "../../services/auth.service";
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-usersaccount',
  templateUrl: './usersaccount.component.html',
  styleUrls: ['./usersaccount.component.css'],
  providers: [MessageService]
})
export class UsersaccountComponent implements OnInit{

  UsersList:User[]=[];
  idTodelete!:number;
  deleteD:boolean=false
  constructor(private Auth:AuthService,private messageService:MessageService) {

  }
  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers(){
    this.Auth.getAllUsers().subscribe({
      next:(data)=>{
        this.UsersList=data;
        console.log(this.UsersList);
      },error:(err)=>{
        console.log(err)
      }
    })
  }

  clear(table: Table) {
    table.clear();
  }

  deleteuser(idUser:number) {
    this.idTodelete=idUser;
    this.deleteD=true;
  }

  ConfirmDelete() {
    this.Auth.deleteUser(this.idTodelete).subscribe({
      next:(data)=>{
        this.messageService.add({severity:'info',summary:'Info Message',detail:data,life:3000});
        this.getAllUsers();
        this.deleteD=false;
      },error:(err)=>{
        console.log(err)
      }
    })
  }
}
