import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTransaction } from './dtos/create-transaction.dto';
import { Transaction } from './interface/transaction.interface';

@Injectable()
export class TransactionService {
    constructor(@InjectModel('Transaction') private readonly model: Model<Transaction>) {}
    async findAll(): Promise<Transaction[]> {
      return await this.model.find().exec();
    }
  
    async findOne(id: string): Promise<Transaction> {
      return await this.model.findById(id).exec();
    }
  
    async create(data: CreateTransaction): Promise<Transaction> {
      return await new this.model({
        ...data,
      }).save();
    }
  
    async update(id: string, data: CreateTransaction): Promise<Transaction> {
      return await this.model.findByIdAndUpdate(id, data).exec();
    }
  
    async delete(id: string): Promise<Transaction> {
      return await this.model.findByIdAndDelete(id).exec();
    }
}
