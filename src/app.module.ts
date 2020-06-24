import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { CategoryController, UserController, StoreController, ProductController, PermissionsController } from './controllers/index.controller';
import { AppService } from './app.service';
import { CategoryService, UserService, ProductService, StoreService, PermissionsService } from './services/index.service';
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
    ProductController,
    PermissionsController
  ],
  providers: [
    AppService,
    ProductService, 
    StoreService, 
    CategoryService,
    UserService,
    PermissionsService 
  ],
})
export class AppModule {}
