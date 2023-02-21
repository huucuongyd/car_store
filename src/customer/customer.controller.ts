import { Body, Controller, Delete, Get, HttpException, Param, Post, Put } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { response } from 'express';
import { DeleteSuccessfull, GetIdSuccessfull, GetSuccesfull, PostSuccessfull, UpdateSuccessfully,  } from 'src/utils/response';
import { CustomerService } from './customer.service';
import { CreateCustomer } from './dtos/create-customer.dto';
import { Customer } from './interfaces/customer.interface';

@Controller('customer')
@ApiTags('customer')
export class CustomerController {
    service: any;
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    async findAll(): Promise<any> {
      
        const result = await this.customerService.findAll();
        return new GetSuccesfull(
        "customers",
        result
      )
     
    }

    @Get(':id')
    async find(@Param('id') id: string) {
      // return this.customerService.findOne(id)
        const result = await this.customerService.findOne(id);
        return new GetIdSuccessfull(
        "customer",
        result
      )
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateCustomer) {
      try {
        const result = await this.customerService.create(data);
        return new PostSuccessfull('customr',result)
      } catch (error) {
        return {
          message:"Email dualicate"
        }
      }
        
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: CreateCustomer) {
      const result = await this.customerService.update(id, data);
      try{
        return new UpdateSuccessfully('customer',result)
      }catch{
        return{
          message:"update fail"
        }
      }
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      const result = await this.customerService.delete(id);
      return new DeleteSuccessfull('customer',result)
    }
}
