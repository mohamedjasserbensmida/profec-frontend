import { Component  , EventEmitter, OnInit, Output} from '@angular/core';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  implements OnInit {

  CURRENTINDEX = -1;
  PAGE = 0;
  count = 0 ;
  PAGESIZE = 3;
  listEmployees: any =  [];
  @Output() employeeEmitted: EventEmitter<any> =   new EventEmitter();

  constructor(private employeeService: EmployeesService) { }

  ngOnInit(): void {
    this.getEmployeesPaging();
     // this.getEmployees();
   }
   

   getRequestParams(page:number, pageSize: number): any {

    let params: any = {};
    if(page) {
     params['page'] = page - 1;
    }

    if(pageSize) {
      params['size'] =  pageSize;
    }
    return params;
  }


 // Get the list of employees by paging
  getEmployeesPaging(): void {

    const params =  this.getRequestParams(this.PAGE, this.PAGESIZE);

    this.employeeService.getEmployeesByPagination(params)
        .subscribe(response => {

          const {employees, totalItems} = response;
          this.listEmployees =  employees;
          console.log(this.listEmployees)         
           this.count = totalItems;

        }, error => console.log(error));
  }


handlePageChange (event: number) {
  this.PAGE  =  event;
  this.getEmployeesPaging();
}


handleSizePageChange (event: any) {
  this.PAGESIZE  = event.target.value;
  this.PAGE  = 1 ;
  this.getEmployeesPaging();
}


onDelete = (employeeId: number) => {

  if(confirm('Are you sure you want to delete this employee')){
    this.employeeService.deleteEmployee(employeeId).subscribe(response => {
      console.log("Suppression reussie!!!");
      this.getEmployeesPaging();
     }, error=> console.log(error));
  }
}

onUpdate = (employee: any) => {
  this.employeeEmitted.emit(employee);
}

}
