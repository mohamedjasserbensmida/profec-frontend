import { Component , OnInit } from '@angular/core';
import { DepartementsService } from 'src/app/services/departements.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public departements: any[] = [];
  constructor(private depService: DepartementsService) {}
  ngOnInit(): void {
    this.loadListDepartments();
  }  
  loadListDepartments(): void {
    this.depService.getListDepartments().subscribe(data =>{
      this.departements.push(...data);
      console.log(data);
    }, err=> console.log(err));
  }
    
}
