import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    rawBody: true,
  });
  app.enableCors();

    // Gọi hàm setupSwagger để cấu hình Swagger
    setupSwagger(app);
    
  await app.listen(3000);
}
bootstrap();
