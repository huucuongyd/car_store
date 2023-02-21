import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteSuccessfull, GetIdSuccessfull, GetSuccesfull, PostSuccessfull, UpdateSuccessfully } from 'src/utils/response';
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
    async findAll(): Promise<any> {

      const result =await this.carService.findAll();
      return new GetSuccesfull('car',result)
    }

    @Get(':id')
    async find(@Param('id') id: string) {
      const result = await this.carService.findOne(id);
      return new GetIdSuccessfull('car',result)
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateCarDto) {
        const result = await this.carService.create(data);
        try {
          return new PostSuccessfull('car',result)
        } catch (error) {
          return{
            message:"Post car fail"
          }
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateCarDto) {
      const result = await this.carService.update(id, data);
      try {
        return new UpdateSuccessfully('car',result)
      } catch (error) {
        return{
          message:"Update fail"
        }
      }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      const result = await this.carService.delete(id);
      return new DeleteSuccessfull('car',result)
    }
}
