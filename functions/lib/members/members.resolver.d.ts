import { Member } from './models/member.models'
import { MembersService } from './members.service'
export declare class MembersResolver {
  private readonly membersService
  constructor(membersService: MembersService)
  getMember(id: string): Promise<Member>
  getMembers(): Promise<Member[]>
}
