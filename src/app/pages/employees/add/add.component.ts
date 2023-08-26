import { Component , OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartementsService } from 'src/app/services/departements.service';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formEmployee: FormGroup;
  submitted: boolean = false;
  listDepartments: any[]= [] ;
  constructor(private employeeService: EmployeesService, private fb: FormBuilder, private departmentService: DepartementsService) { }

  ngOnInit(): void {
    this.getDepartment();
    this.formEmployee =  this.fb.group({
      employeeFirstName: ['', Validators.required],
      employeeLastName: ['', Validators.required],
      employeePhoneNumber: ['', Validators.required],
      departmentId:['', Validators.required]
    })

  }

  getDepartment():void {
    this.departmentService.getListDepartments().subscribe(data => {

      this.listDepartments.push(...data);
  
    }, error => {
      console.log(error)
    })
  }

get f() {
  return this.formEmployee.controls;
}

submit(): void {
  this.submitted =  true;
  if(this.formEmployee.invalid){
    return;
  }else {

    this.employeeService.postEmployees(this.formEmployee.value).subscribe(data => {
      this.formEmployee.reset();
      }, err => {
        console.log(err)
      });
  }
}



}
