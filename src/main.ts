// src\main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { INestApplication } from '@nestjs/common';
import { IEntryNestModule } from '@/types/nest';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(
    AppModule as IEntryNestModule,
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap().catch((err) => {
  console.error('Error while bootstrapping the application', err);
  process.exit(1);
});
