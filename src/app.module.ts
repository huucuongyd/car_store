import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';
import { CarModule } from './car/car.module';
import { CustomerModule } from './customer/customer.module';
import { SalerModule } from './saler/saler.module';
import { TransactionModule } from './transaction/transaction.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://NodeJS_Beginning:Anhcuongvp1@cluster0.sdo9noc.mongodb.net/car_store?retryWrites=true&w=majority',
    ),
    BrandModule,
    CarModule,
    CustomerModule,
    SalerModule,
    TransactionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
