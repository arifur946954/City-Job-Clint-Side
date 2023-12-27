import { MAddress } from "./MAddress.model";


export interface Memployee{
    id:number;
    mobileNumber:string;
    birthDate:Date;
    
    email:string;
    employeeAddresses:MAddress;
  
    
}