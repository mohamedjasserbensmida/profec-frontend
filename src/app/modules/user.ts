import {Conge} from "./Conge";
import { Departements } from "./Departements";

export interface User {
  idUser: number;
  nomUser: string;
  emailUser: string;
  numdetelUser: string;
  role: string;
  conge: Conge[];
  dateCreation?: Date;
  isDropdownOpen: boolean; // Ajoutez la propriété selected
  selectedDepartmentId: number | null;
  currentDepartmentName: string | null; // Assurez-vous que cette propriété existe  
  departement : Departements
  daysSinceCreation?: number | undefined; 
}
