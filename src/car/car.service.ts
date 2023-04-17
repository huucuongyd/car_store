import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { Car } from './interfaces/car.interface';

@Injectable()
export class CarService {
  constructor(@InjectModel('Car') private readonly model: Model<Car>) {}
  async findAll(): Promise<Car[]> {
    return await this.model.find().exec();
  }

  async findOne(id: string): Promise<any> {
    const idcar = new mongoose.Types.ObjectId(id)
    console.log(idcar)
    const res = await this.model.aggregate([
      {
        $match:{
          _id: idcar
        }
      },
      {
        $addFields:{
          brandid:{
            $toObjectId:'$brand_id'
          }
        }
      },
      {
      $lookup:{
        from: "brand",
        localField: "brandid",
        foreignField: '_id',
        as:"brand_info",
        }
      }
    ])

    console.log(res[0].brand_id)

    return res
  }

  async create(createBrandDto: CreateCarDto): Promise<any> {
    const data = new this.model(createBrandDto)
    await data.save()
    
  }

  async update(id: string, updateBrandDto: UpdateCarDto): Promise<Car> {
    return await this.model.findByIdAndUpdate(id, updateBrandDto).exec();
  }

  async delete(id: string): Promise<Car> {
    return await this.model.findByIdAndDelete(id).exec();
  }
}
