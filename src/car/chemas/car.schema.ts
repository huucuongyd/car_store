import { Schema } from 'mongoose';

export const CarSchema = new Schema(
  {
    name: String,
    year: String,
    power: Number,
    version: String,
    maxspeed: Number,
    status: String,
    price: Number
  },
  { versionKey: false, timestamps: true },
);
