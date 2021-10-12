import { Injectable } from '@nestjs/common';
import { GetMembers, Member } from 'src/members/interfaces/member.interface';
import axios from 'axios';
import * as functions from 'firebase-functions';

const MICRO_CMS_API_KEY = functions.config().microcms.api_key

@Injectable()
export class MembersService {
  // private readonly members: Member[] = []

  async getMember(id: string) {
    const response = await axios.request<Member>({
      method: 'GET',
      url: `https://toipptakosan11.microcms.io/api/v1/member-meta/${id}`,
      headers: {
        'X-API-KEY': MICRO_CMS_API_KEY
      }
    })

    return response.data
  }

  async getMembers(): Promise<Member[]> {
    const response = await axios.request<GetMembers>({
      method: 'GET',
      url: 'https://toipptakosan11.microcms.io/api/v1/member-meta',
      headers: {
        'X-API-KEY': MICRO_CMS_API_KEY
      }
    })

    return response.data.contents
  }
}
