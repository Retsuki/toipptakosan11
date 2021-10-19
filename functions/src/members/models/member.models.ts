import { Field, ObjectType, ID, Int } from '@nestjs/graphql'
import { ProfileImage } from './profile-image.models'
import { Sns } from './sns.models'
import { Experience } from './experience.models'

// scalars
// https://docs.nestjs.com/graphql/scalars

@ObjectType()
export class Member {
  @Field(type => ID)
  id: string;

  @Field(type => String)
  createdAt: string;

  @Field(type => String)
  updatedAt: string;

  @Field(type => String)
  name: string;

  @Field(type => [String])
  occupation: string[];

  @Field(type => String)
  company: string;

  @Field(type => Int)
  experience_year: number;

  @Field(type => ProfileImage)
  profile_image: ProfileImage;

  @Field(type => Sns)
  sns: Sns;

  @Field(type => [Experience])
  experience: Experience[];

  @Field(type => [String])
  skills: string[];
}