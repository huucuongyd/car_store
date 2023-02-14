import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CustomerDocument = HydratedDocument<Car_Customer>

Schema()

export class Car_Customer{
    @Prop()
    name :string

    @Prop()
    email : string

    @Prop()
    dateofbirth : Date

    @Prop()
    phonenumber: number

    @Prop()
    adress: string
}

export const CustomerSchema = SchemaFactory.createForClass(Car_Customer)