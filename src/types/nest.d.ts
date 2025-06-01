// src\types\nest.d.ts

import { Type, DynamicModule } from '@nestjs/common';

/**
 * If you genuinely want to allow NestFactory.create() to accept:
 *  • a plain module class (`Type<unknown>`)
 *  • or a `DynamicModule`
 * then you could write:
 */
export type IEntryNestModule = Type<unknown> | DynamicModule;
