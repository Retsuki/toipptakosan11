import { Member } from 'src/types/axios';
import { Request } from 'express';
export declare class MembersController {
    getMember(params: any): Promise<Member>;
    getMembers(req: Request): Promise<Member[]>;
}
