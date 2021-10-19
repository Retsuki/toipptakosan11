export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Experience = {
  __typename?: 'Experience';
  company: Scalars['String'];
  describe: Scalars['String'];
  fieldId: Scalars['ID'];
  from: Scalars['String'];
  occupation: Array<Scalars['String']>;
  skills: Array<Scalars['String']>;
};

export type Member = {
  __typename?: 'Member';
  experience: Array<Experience>;
  experience_year: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  occupation: Array<Scalars['String']>;
  profile_image: ProfileImage;
  skills: Array<Scalars['String']>;
  sns: Sns;
};

export type ProfileImage = {
  __typename?: 'ProfileImage';
  height: Scalars['Int'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  getMember: Member;
  getMembers: Array<Member>;
};


export type QueryGetMemberArgs = {
  id: Scalars['String'];
};

export type Sns = {
  __typename?: 'Sns';
  facebook: Scalars['String'];
  fieldId: Scalars['ID'];
  github: Scalars['String'];
  twitter: Scalars['String'];
};
