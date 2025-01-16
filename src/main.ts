import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('API Ubeer')
    .setDescription('La documentation de l\'API pour le projet Ubeer')
    .setVersion('1.0')
    .build();

  // Créer le document Swagger avec la configuration
  const document = SwaggerModule.createDocument(app, config);

  // Activer Swagger UI à l'URL /api-docs
  SwaggerModule.setup('api-docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
