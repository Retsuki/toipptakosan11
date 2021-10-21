export declare type Maybe<T> = T;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
};
export declare type Experience = {
    __typename?: 'Experience';
    company: Scalars['String'];
    describe: Scalars['String'];
    fieldId: Scalars['ID'];
    from: Scalars['String'];
    occupation: Array<Scalars['String']>;
    skills: Array<Scalars['String']>;
};
export declare type Member = {
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
export declare type ProfileImage = {
    __typename?: 'ProfileImage';
    height: Scalars['Int'];
    url: Scalars['String'];
    width: Scalars['Int'];
};
export declare type Query = {
    __typename?: 'Query';
    getMember: Member;
    getMembers: Array<Member>;
};
export declare type QueryGetMemberArgs = {
    id: Scalars['String'];
};
export declare type Sns = {
    __typename?: 'Sns';
    facebook: Scalars['String'];
    fieldId: Scalars['ID'];
    github: Scalars['String'];
    twitter: Scalars['String'];
};
