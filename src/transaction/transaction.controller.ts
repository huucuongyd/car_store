import { Controller ,Get,Param,Post,Put,Delete, Body} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { CreateTransaction } from './dtos/create-transaction.dto';
import { Transaction } from './interface/transaction.interface';
import { TransactionService } from './transaction.service';

@Controller('transaction')
@ApiTags('transaction')
export class TransactionController {
    service: any;
    constructor(private readonly customerService: TransactionService) {}

    @Get()
    async findAll(): Promise<Transaction[]> {
        console.log('listall')
    return this.customerService.findAll();
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<any> {
      return await this.customerService.findOne(id);
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateTransaction) {
        console.log('insert 1 docs');
        return await this.customerService.create(data);
    
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: CreateTransaction) {
      return await this.customerService.update(id, data);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      return await this.customerService.delete(id);
    }
}
