import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsController } from './dogs/dogs.controller';
import { CatsModule } from './cats/cats.module';
import { FlowersModule } from './flowers/flowers.module';
import { loggerMiddleware } from './conception/middleware';

@Module({
  imports: [CatsModule, FlowersModule],
  controllers: [AppController, DogsController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(loggerMiddleware).forRoutes('flowers');
  }
}
