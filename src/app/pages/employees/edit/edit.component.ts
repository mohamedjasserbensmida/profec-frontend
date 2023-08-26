import { Component , Input, OnInit } from '@angular/core';
import { DepartementsService } from 'src/app/services/departements.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeesService } from 'src/app/services/employees.service';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  @Input() employee: any;
  a: any;
  formEmployee: FormGroup;
  submitted: boolean = false;
  listDepartments: any[]= [] ;

  constructor(private employeeService: EmployeesService, private fb: FormBuilder, private departementService: DepartementsService) {

  }

  ngOnInit(): void {
    this.getDepartment();
    this.formEmployee =  this.fb.group({
      employeeFirstName: ['', Validators.required],
      employeeLastName: ['', Validators.required],
      employeePhoneNumber: ['', Validators.required],
      departmentId:['', Validators.required]
    })
    // initialize form
    this.setEmployee(this.employee );
  }

  getDepartment():void {
  
    
    this.departementService.getListDepartments().subscribe(data => {

      this.listDepartments.push(...data);
  
    }, error => {
      console.log(error)
    })
  }

  get f() {

    return this.formEmployee.controls;
  }
  submit(): void {
    this.submitted = true;
    if (this.formEmployee.invalid) {
        return;
    } else {
        const data = {
            employeeFirstName: this.f['employeeFirstName'].value,
            employeeLastName: this.f['employeeLastName'].value,
            employeePhoneNumber: this.f['employeePhoneNumber'].value,
            departmentId: parseInt(this. f['departmentId'].value)
        }

        this.employeeService.updateEmployee(data, this.employee.id).subscribe(response => {
            this.formEmployee.reset();
        }, err => {
            console.log(err)
        });
    }
}


  setEmployee = (e:any) => { 
    this.f['employeeFirstName'].setValue(e.employeeFirstName);
    this.f['employeeLastName'].setValue(e.employeeLastName);
    this.f['employeePhoneNumber'].setValue(e.employeePhone);
    this.f['departmentId'].setValue(e.departement.id);
   }
 
}
