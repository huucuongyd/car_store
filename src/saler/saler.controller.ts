import { Controller, Get , Post, Param, Put, Body, Delete} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateSaler } from './dtos/create-saler.dto';
import { Saler } from './interfaces/saler.interface';
import { SalerService } from './saler.service';

@Controller('saler')
@ApiTags('saler')
export class SalerController {
    service: any;
    constructor(private readonly customerService: SalerService) {}

    @Get()
    async findAll(): Promise<Saler[]> {
        console.log('listall')
    return this.customerService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<any> {
      return await this.customerService.findOne(id);
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateSaler) {
        console.log('insert 1 docs');
        return await this.customerService.create(data);
    
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: CreateSaler) {
      return await this.customerService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.customerService.delete(id);
    }
}
