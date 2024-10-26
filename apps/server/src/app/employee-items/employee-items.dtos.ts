import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmployeeItem {
  @Field()
  surname: string;

  @Field()
  roomNumber: string;

  @Field()
  itemName: string;

  @Field()
  issueDate: string;
}

@InputType()
export class UpdateEmployeeItem {
  @Field()
  surname: string;

  @Field()
  roomNumber: string;

  @Field()
  itemName: string;

  @Field()
  issueDate: string;
}
