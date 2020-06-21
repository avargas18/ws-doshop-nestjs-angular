import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CategoryController, UserController, StoreController, ProductController } from './controllers/index.controller';
import { AppService } from './app.service';
import { CategoryService, UserService, ProductService, StoreService } from './services/index.service';
import { URI_DB } from './configuration/configuration';
import { SCHEMAS } from './utils/injectClass';

@Module({
  imports: [
    MongooseModule.forRoot(URI_DB),
    MongooseModule.forFeature(SCHEMAS)
  ],
  controllers: [
    AppController,
    CategoryController,
    UserController,
    StoreController,
    ProductController
  ],
  providers: [
    AppService,
    ProductService, 
    StoreService, 
    CategoryService,
    UserService
  ],
})
export class AppModule {}
