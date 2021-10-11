import { Module } from '@nestjs/common';
import { MembersController } from './members/members.controller';

// About controllers
// https://docs.nestjs.com/controllers

@Module({
  controllers: [MembersController]
})
export class AppModule {}
