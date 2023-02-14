import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { DataService } from './cardb_api.service';
import { CreateBrandDto } from './dto/create.dto';
import { UpdateBrandDto } from './dto/update.dto';

@Controller('brand')
export class DataController {
    constructor(private readonly service: DataService) {}
    @Get()
    async index() {
      return await this.service.findAll();
    }
  
    @Get(':id')
    async find(@Param('id') id: string) {
      return await this.service.findOne(id);
    }
  
    @Post()
    async create(@Body() createBrandDto: CreateBrandDto) {
      return await this.service.create(createBrandDto);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() UpdateBrandDto: UpdateBrandDto) {
      return await this.service.update(id, UpdateBrandDto);
    }
  
    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.service.delete(id);
    }
}