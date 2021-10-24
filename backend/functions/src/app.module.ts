import { join } from 'path'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { MembersModule } from './members/members.module'

// https://github.com/nestjs/graphql/issues/1621
@Module({
  imports: [
    MembersModule,
    GraphQLModule.forRoot({
      include: [MembersModule],
      autoSchemaFile: process.env.NODE_ENV !== 'production' ? join(process.cwd(), 'src/schema.graphql') : true,
    }),
  ],
})
export class AppModule { }
