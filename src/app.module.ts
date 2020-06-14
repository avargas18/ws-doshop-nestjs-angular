import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { URI_DB } from './configuration/configuration';
import { SCHEMAS } from './utils/injectClass';

@Module({
  imports: [
    MongooseModule.forRoot(URI_DB),
    MongooseModule.forFeature(SCHEMAS)
  ],
  controllers: [
    CategoryController,
    UserController,
    AppController
  ],
  providers: [
    AppService,
    CategoryService,
    UserService
  ],
})
export class AppModule {}
