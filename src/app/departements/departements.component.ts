import { Component, OnInit } from '@angular/core';
import { DepartementsService } from '../services/departements.service';
import { Departements } from '../modules/Departements';
import { AuthService } from '../services/auth.service';
import { User } from '../modules/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  departements: Departements[] = [];
  addDialogVisible: boolean = false;
  newDepartement: Departements = {};
  submitted: boolean = false;
  idToDelete: number | undefined;
  selectedDepartementId: number | undefined;
  employees: User[] = []; 
  selectedEmployees: User[] = [];
  selectedEmployeeIds: number[] = [];
  assignConfirmationDialogVisible: boolean = false;

  



  constructor(private departementsService: DepartementsService,private authService: AuthService, private formBuilder: FormBuilder) { 
 
    
  }

  ngOnInit() {
    this.getAllDepartements();
    this.getEmployees();
  }
  
  

  getEmployees() {
    this.authService.getEmployees().subscribe(
      (employees) => {
        this.employees = employees;
      },
      (error) => {
        console.error('Erreur lors de la récupération des employés :', error);
      }
    );
  }

 
  showAddDialog() {
    this.addDialogVisible = true;
  }


  
  
  


  addDepartement() {
    this.departementsService.createDepartement(this.newDepartement).subscribe(
      (response) => {      
        console.log('Département ajouté avec succès :', response);
        this.addDialogVisible = false;
        this.newDepartement = {};
        this.getAllDepartements();
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du département :', error);  
      }
    );
  }

  getAllDepartements() {
    this.departementsService.getDepartements().subscribe(
        (departements) => {
            this.departements = departements; 
        },
        (error) => {
            console.error('Une erreur s\'est produite : ', error);
        }
    );
  }
  
}
  