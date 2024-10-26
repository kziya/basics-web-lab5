import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema({
  collection: 'employee_items',
  timestamps: true,
})
export class EmployeeItem {
  _id?: Types.ObjectId;
  createdAt?: Date;
  updatedAt?: Date;

  @Prop()
  surname: string;

  @Prop()
  roomNumber: string;

  @Prop()
  itemName: string;

  @Prop()
  issueDate: Date;
}

export const EmployeeItemSchema = SchemaFactory.createForClass(EmployeeItem);
