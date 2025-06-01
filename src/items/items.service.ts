// src\items\items.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import prisma from '@/src/prismaClient';
import { CreateItemDto } from '@/src/items/dto/create-item.dto';
import { UpdateItemDto } from '@/src/items/dto/update-item.dto';

@Injectable()
export class ItemsService {
  async create(createItemDto: CreateItemDto) {
    return prisma.item.create({
      data: {
        name: createItemDto.name,
        description: createItemDto.description,
        price: createItemDto.price,
        inStock: createItemDto.inStock ?? true,
      },
    });
  }

  async findAll() {
    return prisma.item.findMany();
  }

  async findOne(id: number) {
    const item = await prisma.item.findUnique({
      where: { id },
    });
    if (!item) {
      throw new NotFoundException(`Item with id ${id} not found`);
    }
    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto) {
    // Ensure item exists, otherwise Prisma will throw or we can handle ourselves:
    await this.findOne(id);

    return prisma.item.update({
      where: { id },
      data: {
        name: updateItemDto.name,
        description: updateItemDto.description,
        price: updateItemDto.price,
        inStock: updateItemDto.inStock,
      },
    });
  }

  async remove(id: number) {
    // Ensure item exists first
    await this.findOne(id);

    return prisma.item.delete({
      where: { id },
    });
  }
}
