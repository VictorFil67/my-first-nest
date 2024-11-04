import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateFlowersDto } from './dto/flowers.dto';

@Injectable()
export class FlowersService {
  constructor(private readonly prisma: PrismaService) {}
  findAll() {
    // return [
    //   { name: 'rose', color: 'red', price: 5 },
    //   { name: 'tulip', color: 'white', price: 6 },
    //   { name: 'daisy', color: 'yellow', price: 7 },
    // ];
    return this.prisma.flower.findMany();
  }
  create(dto: CreateFlowersDto) {
    return this.prisma.flower.create({
      data: dto,
    });
  }
}
