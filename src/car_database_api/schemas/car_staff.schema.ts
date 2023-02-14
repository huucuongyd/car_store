import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StaffDocument = HydratedDocument<Car_Staff>

Schema()

export class Car_Staff{
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

export const StaffSchema = SchemaFactory.createForClass(Car_Staff)