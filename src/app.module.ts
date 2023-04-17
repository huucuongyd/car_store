import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BrandModule } from './brand/brand.module';
import { CarModule } from './car/car.module';
import { CustomerModule } from './customer/customer.module';
import { SalerModule } from './saler/saler.module';
import { TransactionModule } from './transaction/transaction.module';
import { LoginModule } from './login/login.module';
import {
  AcceptLanguageResolver,I18nJsonLoader,
  I18nModule,
  QueryResolver,
} from 'nestjs-i18n';
import * as path from 'path';

@Module({
  imports: [ 
    I18nModule.forRoot({
      fallbackLanguage: 'en',
      loaderOptions: {
        path: path.join(__dirname, '/i18n/'),
        watch: true,
      },
      resolvers: [
        { use: QueryResolver, options: ['lang'] },
        AcceptLanguageResolver,
      ],
    }),
    MongooseModule.forRoot(
      'mongodb+srv://NodeJS_Beginning:Anhcuongvp1@cluster0.sdo9noc.mongodb.net/car_store?retryWrites=true&w=majority',
    ),
    BrandModule,
    CarModule,
    CustomerModule,
    SalerModule,
    TransactionModule,
    LoginModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
