import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BrandDocument = Car_Brand & Document

export class Car_Brand{
    @Prop()
    name :string

    @Prop()
    origin : string

    @Prop()
    companyowner : string

    @Prop()
    website: string
}

export const BrandSchema = SchemaFactory.createForClass(Car_Brand)
