import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './schemas/transaction.schema';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

@Module({
  imports:[
    MongooseModule.forFeature([
      {name:'Transaction', schema: TransactionSchema, collection:'transactions'}
    ])
  ],
  controllers: [TransactionController],
  providers: [TransactionService]
})
export class TransactionModule {}
