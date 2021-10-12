import { Controller, Get, Param } from '@nestjs/common';
import { Member } from 'src/members/interfaces/member.interface';
import { MembersService } from './members.service';
@Controller('members')
export class MembersController {
  constructor(private membersService: MembersService){}

  @Get(':id')
  async getMember(@Param() params): Promise<Member> {
    return this.membersService.getMember(params.id)
  }

  @Get()
  async getMembers(): Promise<Member[]> {
    return this.membersService.getMembers()
  }
}
