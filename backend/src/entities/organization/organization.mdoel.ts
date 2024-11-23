import { Schema, model } from "mongoose";

export const OrganizationSchema = new Schema({
  _id: String,
  organization_name: { type: String, required: true },
  location: {
    organization_country: { type: String, required: true },
    organization_city: { type: String },
  },
  organization_website: String,
  organization_description: String,
});

OrganizationSchema.virtual("job_openinigs", {
  ref: "JobOpeningSchema",
  localField: "_id",
  foreignField: "organization",
});

OrganizationSchema.set("toJSON", { virtuals: true });
OrganizationSchema.set("toObject", { virtuals: true });

export const OrganizationModel = model("OrganizationModel", OrganizationSchema);