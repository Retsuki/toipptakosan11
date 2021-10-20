import axios from 'axios';
import { Injectable } from '@nestjs/common';
import * as functions from 'firebase-functions';
import { Member } from './models/member.models';

const MICRO_CMS_API_KEY = functions.config().microcms.api_key

interface GetMembers {
  contents: Member[];
  totalCount: number;
  offset: number;
  limit: number;
}
@Injectable()
export class MembersService {
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
