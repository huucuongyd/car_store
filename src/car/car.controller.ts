import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CarService } from './car.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { Car } from './interfaces/car.interface';

@Controller('car')
@ApiTags('car')
export class CarController {
    service: any;
    constructor(private readonly carService: CarService) {}

    @Get()
    async findAll(): Promise<Car[]> {
        console.log('listall')
    return this.carService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.carService.findOne(id);
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateCarDto) {
        console.log('insert 1 docs');
        return await this.carService.create(data);
    
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateCarDto) {
      return await this.carService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.carService.delete(id);
    }
}
