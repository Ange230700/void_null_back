// src\items\items.module.ts

import { Module } from '@nestjs/common';
import { ItemsService } from '@/src/items/items.service';
import { ItemsController } from '@/src/items/items.controller';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
