import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EmployeeItem, EmployeeItemSchema } from './employee-items.schema';
import { EmployeeItemsRepository } from './employee-items.repository';
import { EmployeeItemResolver } from './employee-items.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([
      { schema: EmployeeItemSchema, name: EmployeeItem.name },
    ]),
  ],
  providers: [EmployeeItemsRepository, EmployeeItemResolver],
})
export class EmployeeItemsModule {}
