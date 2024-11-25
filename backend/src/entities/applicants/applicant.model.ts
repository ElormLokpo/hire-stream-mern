import { Schema, model } from "mongoose";
import { DisabilityEnum, EducationLevelEnum } from "./applicant.types";
import { v4 } from "uuid";

export const ApplicantSchema = new Schema({
    _id: String,
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    dob: { type: Date, default: Date.now() },
    highest_education_level: { type: String, enum: Object.values(EducationLevelEnum) },
    skills: {
        technical_skills: [String],
        soft_skills: [String]
    },
    certifications: [String],
    physical_disabilities: { type: String, enum: Object.values(DisabilityEnum) },
    job_opening: {
        type: String,
        ref: "JobOpeningModel",
        required:true
    }
})

ApplicantSchema.pre("save", async function () {
    this._id = await v4();
})

export const ApplicantModel = model("ApplicantModel", ApplicantSchema)