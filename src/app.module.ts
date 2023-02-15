import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {DataModule} from './car_database_api/cardb_api.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://NodeJS_Beginning:Anhcuongvp1@cluster0.sdo9noc.mongodb.net/car_store?retryWrites=true&w=majority'),DataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
