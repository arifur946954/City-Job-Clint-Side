import { MpresendAddress } from "./MpresendAddress.model";


export interface MAddress{
    Id:number;
    employeeId:number;
    presentAddresses:MpresendAddress[];
    
}