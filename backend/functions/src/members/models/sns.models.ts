import { Field, ObjectType, ID } from '@nestjs/graphql'

@ObjectType()
export class Sns {
  @Field((type) => ID)
  fieldId: string

  @Field((type) => String)
  facebook: string

  @Field((type) => String)
  twitter: string

  @Field((type) => String)
  github: string
}
