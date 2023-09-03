import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit{
  items!: MenuItem[];
  role!:string;
  constructor(private Auth:AuthService) {
  }

  ngOnInit(): void {
    this.role=this.Auth.getFromLocalStronge("role")!;

    if(this.role==='admin'){
      this.items = [
        {
          label: 'Users Management',
          icon: 'pi pi-fw pi-users',
          routerLink: ['/home/user/usersManagement']
        },
        {
          label: 'Departements Management',
          icon: 'pi-ticket' ,
          routerLink: ['/home/departements']
        },
        {

        },
        {
          label: 'Conge Management',
          icon: 'pi pi-fw   pi-arrow-up'  ,
          routerLink: ['/home/conge/management']

         },
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          routerLink: ['/home/user/profile']
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
          command:()=>{
            this.logout();
          }
        }
      ];

    }else {

      this.items = [
        {
          label: 'Conge',
          icon: 'pi pi-fw   pi-arrow-up'  ,
          routerLink: ['/home/conge']

        },
        {
          label: 'Profile',
          icon: 'pi pi-fw pi-user',
          routerLink: ['/home/user/profile']
        },
        {
          label: 'Quit',
          icon: 'pi pi-fw pi-power-off',
          command:()=>{
            this.logout();
          }
        }
      ];
    }




  }


  logout(){
    this.Auth.logout();
  }


}
