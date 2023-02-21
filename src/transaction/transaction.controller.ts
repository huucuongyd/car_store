import { Controller ,Get,Param,Post,Put,Delete, Body} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DeleteSuccessfull, GetIdSuccessfull, GetSuccesfull, PostSuccessfull, UpdateSuccessfully } from 'src/utils/response';
import { CreateTransaction } from './dtos/create-transaction.dto';
import { Transaction } from './interface/transaction.interface';
import { TransactionService } from './transaction.service';

@Controller('transaction')
@ApiTags('transaction')
export class TransactionController {
    service: any;
    constructor(private readonly customerService: TransactionService) {}

    @Get()
    async findAll(): Promise<any> {
      const res = await this.customerService.findAll();
      return new GetSuccesfull('transaction',res)
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<any> {
      const res = await this.customerService.findOne(id);
      return new GetIdSuccessfull('transaction',res)
    }

    @Post()
    @ApiOkResponse({ description: 'The brand has been successfully created.' })
    async createCar(@Body() data: CreateTransaction) {
        const res = await this.customerService.create(data);
        try {
          return new PostSuccessfull('transaction',res)
        } catch (error) {
          return{
            message:"Cant post transaction"
          }
        }
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() data: CreateTransaction) {
      const res = await this.customerService.update(id, data);
      return new UpdateSuccessfully('transaction',res)
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
      const res = await this.customerService.delete(id);
      return new DeleteSuccessfull('transaction', res)
    }
}
