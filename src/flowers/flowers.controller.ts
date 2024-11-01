import { Controller, Get, Query } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/parseIntPipe';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}
  @Get()
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    console.log('after Request');
    return this.flowersService.findAll();
  }
}
