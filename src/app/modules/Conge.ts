export interface Conge{
  id?: number;
  typeConge?: string;
  description?: string;
  email?:string;
  dateCreation?: Date;
}

export interface email{
  to?:string;
  subject?:string;
  body?:string;
}
