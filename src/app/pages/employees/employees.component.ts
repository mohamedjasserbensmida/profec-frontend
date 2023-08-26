import { Component , OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component'; // Composant pour l'ajout
import { EditComponent } from './edit/edit.component'; // Composant pour la modification


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public employeeShared: any;
  isUpdating: boolean = false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px',
      panelClass: 'center-dialog',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Mettez ici le code que vous souhaitez exécuter après la fermeture du pop-up d'ajout.
    });
  }
  get = ($event: any) => {  
    this.isUpdating  = true;
    this.employeeShared = $event;
  }
  

}
