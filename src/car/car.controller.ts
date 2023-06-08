import { Body, Controller, Delete, Get, Param, Post, Put ,Headers, UseGuards} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteSuccessfull, GetIdSuccessfull, GetSuccesfull, PostSuccessfull, UpdateSuccessfully } from 'src/utils/response';
import { CarService } from './car.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/role.decorator';
import { Role } from 'src/auth/role.emun';
import { RolesGuard } from 'src/auth/role.guard';

@Controller('car')
@ApiTags('car')
export class CarController {
    service: any;
    constructor(private readonly carService: CarService) {}


    @Get()
    @UseGuards(JwtAuthGuard)
    async findAll(): Promise<any> {

      const result = await this.carService.findAll();

      return new GetSuccesfull('car',result)
    }

    @Get(':id')
    @Roles(Role.Admin)
    @UseGuards(JwtAuthGuard,RolesGuard)

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
    async update(@Param('id') id: string, @Body() data: any) {
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
