import { Controller, Get , Post, Param, Put, Body, Delete} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteSuccessfull, GetIdSuccessfull, GetSuccesfull, PostSuccessfull, UpdateSuccessfully } from 'src/utils/response';
import { CreateSaler } from './dtos/create-saler.dto';
import { Saler } from './interfaces/saler.interface';
import { SalerService } from './saler.service';

@Controller('saler')
@ApiTags('saler')
export class SalerController {
    service: any;
    constructor(private readonly customerService: SalerService) {}

    @Get()
    async findAll(): Promise<any> {
      const result = await this.customerService.findAll();
      return new GetSuccesfull('saler',result)
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<any> {
      const result = await this.customerService.findOne(id);
      return new GetIdSuccessfull('saler',result)
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateSaler) {
        const result = await this.customerService.create(data);
        try {
          return new PostSuccessfull('saler',result)
        } catch (error) {
          return {
            message:"Post saler fail"
          }
        }
    
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: CreateSaler) {
      const result = await this.customerService.update(id, data);
      try {
        return new UpdateSuccessfully('saler',result)
      } catch (error) {
        return{
          message:"Update saler fail"
        }
      }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      const result = await this.customerService.delete(id);
      return new DeleteSuccessfull('saler',result)
    }
}
