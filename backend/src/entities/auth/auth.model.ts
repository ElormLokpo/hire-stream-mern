import { Schema, model } from "mongoose";
import { v4 } from "uuid";
import { RoleEnum } from "./auth.types";

export const AuthSchema = new Schema({
  _id: String,
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: Object.values(RoleEnum),
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

AuthSchema.pre("save", async function () {
  this._id = await v4();
});


export const AuthModel = model("AuthModel", AuthSchema);