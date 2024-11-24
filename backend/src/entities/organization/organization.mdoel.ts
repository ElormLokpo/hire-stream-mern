import { Schema, model } from "mongoose";
import { v4 } from "uuid";

export const OrganizationSchema = new Schema({
  _id: String,
  organization_name: { type: String, required: true },
  location: {
    organization_country: { type: String, required: true },
    organization_city: { type: String },
  },
  organization_website: String,
  organization_description: String,
  owner:{
    type: String,
    ref:"AuthModel"
  }
});

OrganizationSchema.virtual("job_openings", {
  ref: "JobOpeningModel",
  localField: "_id",
  foreignField: "organization",
});

OrganizationSchema.set("toJSON", { virtuals: true });
OrganizationSchema.set("toObject", { virtuals: true });

OrganizationSchema.pre("save", async function () {
  this._id = await v4();
});


export const OrganizationModel = model("OrganizationModel", OrganizationSchema);