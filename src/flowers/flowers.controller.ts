import {
  Controller,
  Get,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FlowersService } from './flowers.service';
import { ParseIntPipe } from 'src/conception/parseIntPipe';
import { AuthGuard } from 'src/conception/guard';
import { Interceptor } from 'src/conception/interceptor';

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
}
