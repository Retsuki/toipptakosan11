import { join } from 'path'
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MembersModule } from './members/members.module';

// https://github.com/nestjs/graphql/issues/1621

@Module({
  imports: [
    MembersModule,
    GraphQLModule.forRoot({
      include: [MembersModule],
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
  ],
})
export class AppModule {}
