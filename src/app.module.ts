import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User, UserSchema } from './schemas/user.schema';
import { URI_DB } from './configuration/configuration';

@Module({
  imports: [
    MongooseModule.forRoot(URI_DB),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])
  ],
  controllers: [UserController, AppController],
  providers: [UserService, AppService],
})
export class AppModule {}
