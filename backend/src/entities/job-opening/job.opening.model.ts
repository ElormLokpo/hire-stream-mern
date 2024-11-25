import { Schema, model } from "mongoose";
import { v4 } from "uuid";
import { JobTypeEnum, RemoteStateEnum } from "./job.opening.types";

const JobRequirementSchema = new Schema(
  {
    job_title: { type: String, required: true },
    job_overview: { type: String },
    job_location: {
      type: {
        job_country: { type: String, required: true },
        job_city: { type: String },
      },
      required: true,
    },
    salary_currency: String,
    salary_range: { type: String },
    qualifications: { type: [String] },
    responsibilities: { type: [String] },
    job_type: {
      type: String,
      enum: Object.values(JobTypeEnum),
      required: true,
    },
    remote_state: { type: String, enum: Object.values(RemoteStateEnum) },
  },
  { _id: false }
);

const ApplicantFormRequirements = new Schema(
  {
    fullname: { type: Boolean, default: true },
    email: { type: Boolean, default: true },
    phone: { type: Boolean, default: true },
    dob: { type: Boolean, default: true },
    education_level: { type: Boolean, default: true },
    experience: { type: Boolean, default: true },
    skills: { type: Boolean, default: true },
    certifications: { type: Boolean, default: true },
    physical_disabilities: { type: Boolean, default: true },
    cv: { type: Boolean, default: true },
  },
  { _id: false }
);

export const JobOpeningSchema = new Schema({
  _id: String,
  organization: {
    type: String,
    ref: "OrganizationModel",
  },
  job_requirements: JobRequirementSchema,
  applicantform_requirements: ApplicantFormRequirements,
  email_template: {
    acceptance_email: String,
    rejection_email: String,
  },
  deadline: {
    type: Date,
    default: Date.now()
  }
});

JobOpeningSchema.virtual("applicants", {
  ref:"ApplicantModel",
  localField: "_id",
  foreignField:"job_opening"
})

JobOpeningSchema.set("toJSON",{virtuals:true})
JobOpeningSchema.set("toObject", {virtuals:true})

JobOpeningSchema.pre("save", async function () {
  this._id = await v4();
});

export const JobOpeningModel = model("JobOpeningModel", JobOpeningSchema)