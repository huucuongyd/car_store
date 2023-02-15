import { Body, Controller, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dtos/create-brand.dto';

@Controller('brand')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  async createBrand(@Body() data: CreateBrandDto) {
    await this.brandService.create(data);
  }
}
