
import { ParmanentAddress } from "./ParmanentAddress.model";
import { PresentAddress } from "./PresentAddress.model";

export interface Address{
    id:number;
    employeeId:number;
    presentAddresses:PresentAddress
    parmanentAddresses:ParmanentAddress
    
}