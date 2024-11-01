import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/parseIntPipe';
import { AuthGuard } from 'src/conception/guard';

@Controller('flowers')
export class FlowersController {
  constructor(private readonly flowersService: FlowersService) {}
  @Get()
  @UseGuards(AuthGuard)
  findAll(@Query('pageNumber', ParseIntPipe) pageNumber: number) {
    console.log(pageNumber);
    console.log('after Request');
    return this.flowersService.findAll();
  }
}
