import { Member } from 'src/members/interfaces/member.interface';
import { MembersService } from './members.service';
export declare class MembersController {
    private membersService;
    constructor(membersService: MembersService);
    getMember(params: any): Promise<Member>;
    getMembers(): Promise<Member[]>;
}
