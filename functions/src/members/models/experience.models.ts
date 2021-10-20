import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Experience {
  @Field(type => ID)
  fieldId: string;

  @Field(type => String)
  company: string;

  @Field(type => String)
  from: string;

  @Field(type => String)
  describe: string;

  @Field(type => [String])
  skills: string[];

  @Field(type => [String])
  occupation: string[];
}