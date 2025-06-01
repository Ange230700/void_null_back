// src\items\dto\update-item.dto.ts

import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from '@/src/items/dto/create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {}
