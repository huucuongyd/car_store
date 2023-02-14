import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DataController } from './cardb_api.controller';
import { DataService } from './cardb_api.service';
import { BrandSchema, Car_Brand } from './schemas/car_branch.schema';

@Module({
    providers: [DataService],
    controllers: [DataController],
    imports: [
      MongooseModule.forFeature([{name: Car_Brand.name,schema: BrandSchema}])
    ]
})

export class DataModule {}
