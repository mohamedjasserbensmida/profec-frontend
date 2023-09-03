import {Conge} from "./Conge";

export interface User {
  idUser: number;
  nomUser:string;
  emailUser:string;
  numdetelUser:string;
  role:string;
  conge: Conge[];
  dateCreation?: Date;
}
