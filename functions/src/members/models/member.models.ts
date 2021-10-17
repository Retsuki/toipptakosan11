import { Field, ObjectType, ID } from '@nestjs/graphql';

// scalars
// https://docs.nestjs.com/graphql/scalars

@ObjectType()
export class Member {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => [String])
  occupation: string[];
}