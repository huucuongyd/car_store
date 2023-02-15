import { Document } from 'mongoose';

export interface Brand extends Document {
  name: string;
  origin: string;
  companyowner: string;
  website: string;
}
