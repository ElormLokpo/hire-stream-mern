import {Schema, model} from "mongoose";
import { DisabilityEnum, EducationLevelEnum } from "./applicant.types";

export const ApplicantSchema = new Schema({
    fullname:String, 
    email:{type:String, required:true},
    phone:String, 
    dob:{type:Date, default:Date.now()} ,
    highest_education_level:{type:String, enum:Object.values(EducationLevelEnum)},
    skills:{
        technical_skills:[String],
        soft_skills:[String]
    },
    certifications:[String],
    physical_disabilities:{type:String, enum: Object.values(DisabilityEnum)}

})