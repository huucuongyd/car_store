import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarSchema } from './chemas/car.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'Car', schema: CarSchema, collection:'cars'}
  ])],
  controllers: [CarController],
  providers: [CarService]
})
export class CarModule {}
