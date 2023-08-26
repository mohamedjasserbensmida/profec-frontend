import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartementsService } from 'src/app/services/departements.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  submitted = false;
  departForm: FormGroup;

  constructor(private fb: FormBuilder, private deptService: DepartementsService, private dialogRef: MatDialogRef<AddComponent>) { }

  ngOnInit(): void {
    this.departForm = this.fb.group({
      departementName: ['', Validators.required]
    });
  }

  get f() { return this.departForm.controls; }

  submit(): void {
    this.submitted = true;

    if (this.departForm.invalid) {
      return;
    } else {
      console.log(this.departForm.value);
      // ICI ON RECUPERE LE NOM DU DEPARTMENT
      this.deptService.postDepartments(this.departForm.value).subscribe(response => {
        console.log("ok");
        // Fermer le pop-up après l'ajout
        this.dialogRef.close();
      }, error => console.log(error));
    }
  }

  // Ajouter cette méthode pour fermer le pop-up sans action
  closeDialog(): void {
    this.dialogRef.close();
  }
}
