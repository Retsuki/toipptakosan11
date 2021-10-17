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

export type Member = {
  __typename?: 'Member';
  id: Scalars['ID'];
  name: Scalars['String'];
  occupation: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getMember: Member;
  getMembers: Array<Member>;
};


export type QueryGetMemberArgs = {
  id: Scalars['String'];
};

export type GetMemberQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetMemberQuery = { __typename?: 'Query', getMember: { __typename?: 'Member', id: string, name: string, occupation: Array<string> } };


export const GetMemberDocument = gql`
    query getMember($id: String!) {
  getMember(id: $id) {
    id
    name
    occupation
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getMember(variables: GetMemberQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMemberQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetMemberQuery>(GetMemberDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getMember');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;