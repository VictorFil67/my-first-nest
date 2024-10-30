import { Injectable } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';
import { cats } from './cats';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = cats;

  create(cat: Cat) {
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
