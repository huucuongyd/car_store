import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dtos/create-brand.dto';
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

  @Post()
  @ApiOkResponse({ description: 'The brand has been successfully created.' })
  async createBrand(@Body() data: CreateBrandDto) {
    console.log('insert 1 docs');
    return await this.brandService.create(data);
    
  }
}
