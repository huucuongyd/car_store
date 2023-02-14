import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CarInfoDocument = HydratedDocument<Car_Information>

@Schema()

export class Car_Information{
    @Prop()
    version: string

    @Prop()
    power: number

    @Prop()
    maxspeed: number

    @Prop()
    year: number

    @Prop()
    status: string

    @Prop()
    price: number
}

export const CarInfoSchema = SchemaFactory.createForClass(Car_Information)