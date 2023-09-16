import { Component, ElementRef, OnInit } from '@angular/core';
import { User } from "../../modules/user";
import { AuthService } from "../../services/auth.service";
import { Table } from "primeng/table";
import { MessageService } from "primeng/api";
import { DepartementsService } from 'src/app/services/departements.service';
import { Departements } from 'src/app/modules/Departements';

@Component({
  selector: 'app-usersaccount',
  templateUrl: './usersaccount.component.html',
  styleUrls: ['./usersaccount.component.css'],
  providers: [MessageService]
})
export class UsersaccountComponent implements OnInit {

  UsersList: User[] = [];
  departements: Departements[] = [];
  isDropdownOpen = false;
  idTodelete!: number;
  deleteD: boolean = false;

  constructor(private Auth: AuthService, private messageService: MessageService, private departementService: DepartementsService , private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.getDepartments();
    this.loadUserData();
  }

  loadUserData() {
    this.Auth.getAllUsers().subscribe({
      next: (data) => {
        this.UsersList = data;
        this.UsersList.forEach((user) => {
          this.getDaysSinceCreation(user);
        });
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  getDaysSinceCreation(user: User) {
    if (user.role.toLowerCase() === 'employee') {
      this.Auth.getDaysSinceCreation(user.idUser).subscribe(
        (days: number) => {
          user.daysSinceCreation = days;
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
  
  
  
  

  toggleDropdown(user: User)  {
    user.isDropdownOpen = !user.isDropdownOpen;
  }

  getDepartmentName(departmentId: number): string {
    const department = this.departements.find(d => d.id === departmentId);
    return department ? department.departementName || '' : '';
  }

  getDepartments() {
    this.departementService.getDepartements().subscribe({
      next: (data) => {
        this.departements = data;
        console.log('Départements chargés :', this.departements);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  refreshUserDepartmentName(user: User) {
    if (user.selectedDepartmentId !== null) {
      user.currentDepartmentName = this.getDepartmentName(user.selectedDepartmentId);
    } else {
      user.currentDepartmentName = "Aucun département";
    }
  }

  assignUserToDepartment(user: User) {
    const departmentId = user.selectedDepartmentId;
    if (departmentId !== null) {
      this.Auth.assignEmployeeToDepartment(user.idUser, departmentId).subscribe(
        (response) => {
          this.refreshUserDepartmentName(user);
          this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Employee assigned to department successfully' });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }

  getAllUsers() {  
    this.Auth.getAllUsers().subscribe({
      next:(data)=>{
        this.UsersList=data;
      },
      error:(err)=>{
        console.log(err)
      }
    });
  }

  clear(table: Table) {
    table.clear();
  }

  deleteuser(idUser: number) {
    this.idTodelete = idUser;
    this.deleteD = true;
  }
  
  ConfirmDelete() {
    this.Auth.deleteUser(this.idTodelete).subscribe({
      next: (data) => {
        this.messageService.add({ severity: 'info', summary: 'Info Message', detail: data, life: 3000 });
        this.getAllUsers(); 
        this.deleteD = false;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
