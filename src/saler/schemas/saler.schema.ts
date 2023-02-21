import { Schema } from "mongoose";

export const SalerSchema = new Schema(
    {
        name: String,
        birth: String,
        email: String,
        phonenumber: Number,
        adress: String
    },
    { versionKey: false, timestamps: true },
  );