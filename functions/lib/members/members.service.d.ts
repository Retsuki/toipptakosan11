import { Member } from 'src/member.interface';
export declare class MembersService {
    getMember(id: string): Promise<Member>;
    getMembers(): Promise<Member[]>;
}
