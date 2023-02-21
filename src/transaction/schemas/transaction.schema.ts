import { Schema } from "mongoose";

export const TransactionSchema = new Schema(
    {
        discount: Number,
        amount_due:Number
    },
    { versionKey: false, timestamps: true },
  );