import { Member } from 'src/members/interfaces/member.interface';
export declare class MembersService {
    getMember(id: string): Promise<Member>;
    getMembers(): Promise<Member[]>;
}
