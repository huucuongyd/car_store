import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CustomerService } from './customer.service';
import { CreateCustomer } from './dtos/create-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
    service: any;
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async findAll(): Promise<Customer[]> {
        console.log('listall')
    return this.customerService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<any> {
      return await this.customerService.findOne(id);
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateCustomer) {
        console.log('insert 1 docs');
        return await this.customerService.create(data);
    
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: CreateCustomer) {
      return await this.customerService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.customerService.delete(id);
    }
}
