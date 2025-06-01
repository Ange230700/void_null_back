// src\app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from '@/src/app.controller';
import { AppService } from '@/src/app.service';
import { ItemsModule } from '@/src/items/items.module';

@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
