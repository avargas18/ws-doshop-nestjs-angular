import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './configuration/configuration';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // {cors: true}
  // Add cors
  app.enableCors()
  await app.listen(PORT);
}
bootstrap();
