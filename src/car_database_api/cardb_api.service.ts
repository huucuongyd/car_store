import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBrandDto } from './dto/create.dto';
import { UpdateBrandDto } from './dto/update.dto';
import { BrandDocument, Car_Brand } from './schemas/car_branch.schema';



@Injectable()
export class DataService {
    constructor(@InjectModel(Car_Brand.name) private readonly model: Model<BrandDocument>){}
    async findAll(): Promise<Car_Brand[]> {
        return await this.model.find().exec();
      }
    
      async findOne(id: string): Promise<Car_Brand> {
        return await this.model.findById(id).exec();
      }
    
      async create(createBrandDto: CreateBrandDto): Promise<Car_Brand> {
        return await new this.model({
          ...createBrandDto,
        }).save();
      }
    
      async update(id: string, updateBrandDto: UpdateBrandDto): Promise<Car_Brand> {
        return await this.model.findByIdAndUpdate(id, updateBrandDto).exec();
      }
    
      async delete(id: string): Promise<Car_Brand> {
        return await this.model.findByIdAndDelete(id).exec();
      }
}