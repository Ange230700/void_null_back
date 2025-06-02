// src\main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/src/app.module';
import { INestApplication } from '@nestjs/common';
import { IEntryNestModule } from '@/src/types/nest';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(
    AppModule as IEntryNestModule,
  );
  app.enableCors({
    origin: process.env.FRONT_API_BASE_URL,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('Error while bootstrapping the application', err);
  process.exit(1);
});
