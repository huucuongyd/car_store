import { Document } from 'mongoose';

export interface Car extends Document {
    name: String;
    year: String;
    power: Number;
    version: String;
    maxspeed: Number;
    status: String;
    price: Number
}
