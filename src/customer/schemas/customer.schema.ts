import { Schema } from "mongoose";

export const CustomerSchema = new Schema(
    {
        name: String,
        birth: String,
        email: String,
        phonenumber: Number,
        adress: String
    },
    { versionKey: false, timestamps: true },
  );