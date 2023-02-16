import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomer } from './dtos/create-customer.dto';
import { Customer } from './interfaces/customer.interface';


@Injectable()
export class CustomerService {
    constructor(@InjectModel('Customer') private readonly model: Model<Customer>) {}
    async findAll(): Promise<Customer[]> {
      return await this.model.find().exec();
    }
  
    async findOne(id: string): Promise<Customer> {
      return await this.model.findById(id).exec();
    }
  
    async create(data: CreateCustomer): Promise<Customer> {
      return await new this.model({
        ...data,
      }).save();
    }
  
    async update(id: string, data: CreateCustomer): Promise<Customer> {
      return await this.model.findByIdAndUpdate(id, data).exec();
    }
  
    async delete(id: string): Promise<Customer> {
      return await this.model.findByIdAndDelete(id).exec();
    }
}
