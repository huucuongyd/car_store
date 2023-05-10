import { Schema } from 'mongoose';

export const UserSchema = new Schema(
  {
    username: String,
    email: String,
    password: String
  },
  { versionKey: false, timestamps: true },
);
