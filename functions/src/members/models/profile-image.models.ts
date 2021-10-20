import { Field, ObjectType, Int } from '@nestjs/graphql'

@ObjectType()
export class ProfileImage {
  @Field(type => String)
  url: string;

  @Field(type => Int)
  height: number;

  @Field(type => Int)
  width: number;
}