import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
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
  company: Scalars['String'];
  createdAt: Scalars['String'];
  experience: Array<Experience>;
  experience_year: Scalars['Int'];
  id: Scalars['ID'];
  name: Scalars['String'];
  occupation: Array<Scalars['String']>;
  profile_image: ProfileImage;
  skills: Array<Scalars['String']>;
  sns: Sns;
  updatedAt: Scalars['String'];
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

export type GetMemberQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberQuery = { __typename?: 'Query', getMember: { __typename?: 'Member', id: string, name: string, occupation: Array<string>, updatedAt: string } };

export type GetMembersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMembersQuery = { __typename?: 'Query', getMembers: Array<{ __typename?: 'Member', id: string, name: string, occupation: Array<string>, experience_year: number, skills: Array<string>, profile_image: { __typename?: 'ProfileImage', url: string, height: number, width: number }, sns: { __typename?: 'Sns', fieldId: string, facebook: string, twitter: string, github: string }, experience: Array<{ __typename?: 'Experience', fieldId: string, company: string, from: string, describe: string, skills: Array<string>, occupation: Array<string> }> }> };


export const GetMemberDocument = gql`
    query getMember($id: String!) {
  getMember(id: $id) {
    id
    name
    occupation
    updatedAt
  }
}
    `;
export const GetMembersDocument = gql`
    query getMembers {
  getMembers {
    id
    name
    occupation
    experience_year
    profile_image {
      url
      height
      width
    }
    sns {
      fieldId
      facebook
      twitter
      github
    }
    experience {
      fieldId
      company
      from
      describe
      skills
      occupation
    }
    skills
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getMember(variables: GetMemberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMemberQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMemberQuery>(GetMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMember');
    },
    getMembers(variables?: GetMembersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMembersQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMembersQuery>(GetMembersDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMembers');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;