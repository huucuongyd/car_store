import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BrandController } from './brand.controller';
import { BrandService } from './brand.service';
import { BrandSchema } from './schemas/brand.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Brand', schema: BrandSchema, collection: 'brand' },
    ]),
  ],
  controllers: [BrandController],
  providers: [BrandService],
})
export class BrandModule {}
