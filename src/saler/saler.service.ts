import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSaler } from './dtos/create-saler.dto';
import { Saler } from './interfaces/saler.interface';

@Injectable()
export class SalerService {
    constructor(@InjectModel('Saler') private readonly model: Model<Saler>) {}
    async findAll(): Promise<Saler[]> {
      return await this.model.find().exec();
    }
  
    async findOne(id: string): Promise<Saler> {
      return await this.model.findById(id).exec();
    }
  
    async create(data: CreateSaler): Promise<Saler> {
      return await new this.model({
        ...data,
      }).save();
    }
  
    async update(id: string, data: CreateSaler): Promise<Saler> {
      return await this.model.findByIdAndUpdate(id, data).exec();
    }
  
    async delete(id: string): Promise<Saler> {
      return await this.model.findByIdAndDelete(id).exec();
    }
}
