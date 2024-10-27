import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Redirect,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { articles } from './articles';
import { Article } from './article.model';

@Controller('articles')
export class AppController {
  @Get('create')
  @Render('create-article')
  getForm(): void {
    return;
  }

  @Post()
  @Redirect('/', 301)
  create(@Body() body: any): void {
    const id = articles.length + 1;
    const article = new Article(body.title, body.content, id);
    articles.push(article);
  }

  @Get()
  // getHello() {
  //   console.log('Hello World!');
  // }
  @Render('index')
  index() {
    return { articles };
  }
  @Get(':id')
  @Render('article')
  getById(@Param('id', ParseIntPipe) id: number) {
    return articles.find((article) => article.id === id);
  }
  // @Get()
  @Delete(':id')
  @Redirect('/', 301)
  delete(@Param('id', ParseIntPipe) id: number) {
    const index = articles.findIndex((article) => article.id === id);
    if (index > -1) {
      const deleteArticle = articles.splice(index, 1);
      console.log(deleteArticle);
      console.log(articles);
    }
  }
}
