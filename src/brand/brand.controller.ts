import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dtos/create-brand.dto';
import { UpdateBrandDto } from './dtos/update-brand.dto';
import { Brand } from './intefaces/brand.inteface';

@Controller('brand')
@ApiTags('brand')
export class BrandController {
  service: any;
  constructor(private readonly brandService: BrandService) {}

  @Get()
  async findAll(): Promise<Brand[]> {
    console.log('listall')
    return this.brandService.findAll();

  }

  @Get(':id')
    async find(@Param('id') id: string) {
      return await this.brandService.findOne(id);
    }

  @Post()
  @ApiOkResponse({ description: 'The brand has been successfully created.' })
  async createBrand(@Body() data: CreateBrandDto) {
    console.log('insert 1 docs');
    return await this.brandService.create(data);
    
  }

  @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateBrandDto) {
      return await this.brandService.update(id, data);
    }

  @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.brandService.delete(id);
    }
}
