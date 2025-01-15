import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

    // Créer la configuration de Swagger
    const config = new DocumentBuilder()
    .setTitle('API Ubeer')  // Titre de l'API
    .setDescription('La documentation de l\'API pour le projet Ubeer')  // Description
    .setVersion('1.0')  // Version de l'API
    .addTag('beers')  // Tag pour organiser les endpoints
    .build();

  // Créer le document Swagger avec la configuration
  const document = SwaggerModule.createDocument(app, config);

  // Activer Swagger UI à l'URL /api-docs
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
