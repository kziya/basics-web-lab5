import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { EmployeeItem } from './employee-items.schema';
import { Model, Types, UpdateWriteOpResult } from 'mongoose';
import { CreateEmployeeItem, UpdateEmployeeItem } from './employee-items.dtos';

@Injectable()
export class EmployeeItemsRepository {
  constructor(
    @InjectModel(EmployeeItem.name)
    private readonly employeeItemModel: Model<EmployeeItem>
  ) {}

  async findAll(): Promise<EmployeeItem[]> {
    return this.employeeItemModel.find().exec();
  }

  async findOne(id: string): Promise<EmployeeItem> {
    return this.employeeItemModel.findById(id).exec();
  }

  async create(data: CreateEmployeeItem): Promise<EmployeeItem> {
    return this.employeeItemModel.create(data);
  }

  async update(id: string, data: UpdateEmployeeItem): Promise<EmployeeItem> {
    return this.employeeItemModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.employeeItemModel.deleteOne({ _id: id }).exec();
    return result.deletedCount > 0;
  }
}
