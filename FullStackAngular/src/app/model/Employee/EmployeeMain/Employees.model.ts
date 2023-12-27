import { AccademicQulification } from "../AccademicQulification/AccademicQulification.model";
import { Address } from "../Address/Address.model";
import { WorkExperience } from "../WorkExperience/WorkExperience.model";

export interface Employees{
    id:number;
    mobileNumber:string;
    name:string;
    fatherName:string;
    motherName:string;
    nid:string;
    dateOfBirth:Date;
    birthPlace:string;
    religion:string;
    bloodGroup:string;
    maritalStatus:string;
    email:string;
    employeeAddresses:Address;
    interviewDare:Date;
    appliedPost:string;
    joiningDate:Date;
    expectedSelary:number;
    appliedBy:string;
    accademicQualifications:AccademicQulification[];
    workExperiences:WorkExperience[];


    
    
}