import { Member } from './models/member.models';
export declare class MembersService {
    getMember(id: string): Promise<Member>;
    getMembers(): Promise<Member[]>;
}
