import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddComponent } from './add/add.component';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    const dialogRef = this.dialog.open(AddComponent, {
      width: '400px', 
      panelClass: 'custom-dialog-container', 
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Boîte de dialogue fermée avec résultat :', result);
    });
  }
}
