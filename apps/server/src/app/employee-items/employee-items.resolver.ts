// employee-item.resolver.ts
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { EmployeeItem } from './employee-items.schema';
import { CreateEmployeeItem, UpdateEmployeeItem } from './employee-items.dtos';
import { EmployeeItemsRepository } from './employee-items.repository';

@Resolver(() => EmployeeItem)
export class EmployeeItemResolver {
  constructor(
    private readonly employeeItemRepository: EmployeeItemsRepository
  ) {}

  @Query(() => [EmployeeItem])
  async employeeItems(): Promise<EmployeeItem[]> {
    return this.employeeItemRepository.findAll();
  }

  @Query(() => EmployeeItem, { nullable: true })
  async employeeItem(@Args('id') id: string): Promise<EmployeeItem> {
    return this.employeeItemRepository.findOne(id);
  }

  @Mutation(() => EmployeeItem)
  async createEmployeeItem(
    @Args('createEmployeeItem') createEmployeeItem: CreateEmployeeItem
  ): Promise<EmployeeItem> {
    return this.employeeItemRepository.create(createEmployeeItem);
  }

  @Mutation(() => EmployeeItem)
  async updateEmployeeItem(
    @Args('id') id: string,
    @Args('updateEmployeeItem') updateEmployeeItem: UpdateEmployeeItem
  ): Promise<EmployeeItem> {
    return this.employeeItemRepository.update(id, updateEmployeeItem);
  }

  @Mutation(() => Boolean)
  async deleteEmployeeItem(@Args('id') id: string): Promise<boolean> {
    return this.employeeItemRepository.delete(id);
  }
}
