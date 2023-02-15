import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dtos/create-brand.dto';
import { Brand } from './intefaces/brand.inteface';

@Injectable()
export class BrandService {
  constructor(@InjectModel('Brand') private readonly model: Model<Brand>) {}
  async findAll(): Promise<Brand[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<Brand> {
    return await this.model.findById(id).exec();
  }

  async create(createBrandDto: CreateBrandDto): Promise<Brand> {
    return await new this.model({
      ...createBrandDto,
    }).save();
  }

  async update(id: string, updateBrandDto: CreateBrandDto): Promise<Brand> {
    return await this.model.findByIdAndUpdate(id, updateBrandDto).exec();
  }

  async delete(id: string): Promise<Brand> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
