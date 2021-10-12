import { Module } from '@nestjs/common';
import { MembersModule } from './members/members.module';

// About controllers
// https://docs.nestjs.com/controllers

@Module({
  imports: [MembersModule]
})
export class AppModule {}
