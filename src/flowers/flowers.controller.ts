import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/parseIntPipe';
import { AuthGuard } from 'src/conception/guard';
import { Interceptor } from 'src/conception/interceptor';
import { CreateFlowersDto } from './dto/flowers.dto';

@Controller('flowers')
@UseInterceptors(Interceptor)
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}
  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    console.log('after Request');
    return this.flowersService.findAll();
  }
  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateFlowersDto) {
    return this.flowersService.create(dto);
  }
}
