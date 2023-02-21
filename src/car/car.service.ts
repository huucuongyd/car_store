import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly model: Model<Car>) {}
  async findAll(): Promise<Car[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Car> {
    return await this.model.findById(id).exec();
  }

  async create(createBrandDto: CreateCarDto): Promise<Car> {
    return await new this.model({
      ...createBrandDto,
    }).save();
  }

  async update(id: string, updateBrandDto: UpdateCarDto): Promise<Car> {
    return await this.model.findByIdAndUpdate(id, updateBrandDto).exec();
  }

  async delete(id: string): Promise<Car> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
