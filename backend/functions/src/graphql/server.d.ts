import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
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
  self_introduction: Scalars['String'];
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Experience: ResolverTypeWrapper<Experience>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Member: ResolverTypeWrapper<Member>;
  ProfileImage: ResolverTypeWrapper<ProfileImage>;
  Query: ResolverTypeWrapper<{}>;
  Sns: ResolverTypeWrapper<Sns>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Experience: Experience;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Member: Member;
  ProfileImage: ProfileImage;
  Query: {};
  Sns: Sns;
  String: Scalars['String'];
};

export type ExperienceResolvers<ContextType = any, ParentType extends ResolversParentTypes['Experience'] = ResolversParentTypes['Experience']> = {
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  describe?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  occupation?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = {
  company?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  experience?: Resolver<Array<ResolversTypes['Experience']>, ParentType, ContextType>;
  experience_year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  occupation?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  profile_image?: Resolver<ResolversTypes['ProfileImage'], ParentType, ContextType>;
  self_introduction?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  sns?: Resolver<ResolversTypes['Sns'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProfileImageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProfileImage'] = ResolversParentTypes['ProfileImage']> = {
  height?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  width?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getMember?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<QueryGetMemberArgs, 'id'>>;
  getMembers?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
};

export type SnsResolvers<ContextType = any, ParentType extends ResolversParentTypes['Sns'] = ResolversParentTypes['Sns']> = {
  facebook?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  fieldId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  github?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  twitter?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Experience?: ExperienceResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  ProfileImage?: ProfileImageResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Sns?: SnsResolvers<ContextType>;
};

