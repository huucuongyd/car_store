import { Schema } from 'mongoose';

export const BrandSchema = new Schema(
  {
    name: String,
    origin: String,
    companyowner: String,
    website: String,
  },
  { versionKey: false, timestamps: true },
);
