import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { ApiOkResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { I18n, I18nContext } from 'nestjs-i18n';
import { DeleteSuccessfull, GetIdSuccessfull, GetSuccesfull, PostSuccessfull, UpdateSuccessfully, } from 'src/utils/response';
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
  async findAll(@Query('lang') lang: string,@I18n() i18n: I18nContext): Promise<any> {
    const data = await this.brandService.findAll();
    const translate = new GetSuccesfull('brand',data)
    const transmess = translate.message.split(" ")
    var message =""
    transmess.forEach(element => {
      var test='test.';
      test = test.concat(element);
      message = message + i18n.t(test,{lang:lang})+" ";
    });

    return {
      message,
      data
    }
  }

  @Get(':id')
    async find(@Param('id') id: string) {
      const result = await this.brandService.findOne(id);
      return new GetIdSuccessfull('brand',result)
    }

  @Post()
  @ApiOkResponse({ description: 'The brand has been successfully created.' })
  async createBrand(@Body() data: CreateBrandDto) {
    const result = await this.brandService.create(data);
    try{
      return new PostSuccessfull('brand',result)
    }catch(error){
      return{
        message:"Post brand fail"
      }
    }
    
  }

  @Put(':id')
    async update(@Param('id') id: string, @Body() data: UpdateBrandDto) {
      const result = await this.brandService.update(id, data);
      try {
        return new UpdateSuccessfully('brand',result)
      } catch (error) {
        return {
          message:"Update brand fail"
        }
      }
    }

  @Delete(':id')
    async delete(@Param('id') id: string) {
      const result = await this.brandService.delete(id);
      return new DeleteSuccessfull('brand',result)
    }
}
