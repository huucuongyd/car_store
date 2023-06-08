import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarSchema } from './chemas/car.schema';
import { JwtStrategy } from 'src/auth/jwt.strategy';
import { RolesGuard } from 'src/auth/role.guard';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'Car', schema: CarSchema, collection:'cars'}
  ])],
  controllers: [CarController],
  providers: [CarService,JwtStrategy,RolesGuard]
})
export class CarModule {}
