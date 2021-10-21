import { Resolver, Query, Args } from '@nestjs/graphql'
import { Member } from './models/member.models'
import { MembersService } from './members.service'

@Resolver((of) => Member)
export class MembersResolver {
  constructor(private readonly membersService: MembersService) {}

  @Query((returns) => Member)
  async getMember(@Args('id') id: string): Promise<Member> {
    return this.membersService.getMember(id)
  }

  @Query((returns) => [Member])
  async getMembers(): Promise<Member[]> {
    return this.membersService.getMembers()
  }
}
