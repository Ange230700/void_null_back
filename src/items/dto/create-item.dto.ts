// src\items\dto\create-item.dto.ts

export class CreateItemDto {
  name: string;
  description?: string;
  price: string;
  inStock?: boolean;
}
