import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SalerController } from './saler.controller';
import { SalerService } from './saler.service';
import { SalerSchema } from './schemas/saler.schema';

@Module({
  imports: [MongooseModule.forFeature([
    {name:'Saler', schema: SalerSchema, collection:'salers'}
  ])],
  controllers: [SalerController],
  providers: [SalerService]
})
export class SalerModule {}
