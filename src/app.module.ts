import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsModule } from './cats/cats.module';
import { FlowersModule } from './flowers/flowers.module';

@Module({
  imports: [CatsModule, FlowersModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule {}
