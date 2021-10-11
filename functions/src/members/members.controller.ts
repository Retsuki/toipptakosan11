import { Controller, Get, Param, Req } from '@nestjs/common';
import { Member, Members } from 'src/types/axios';
import { Request } from 'express';
import axios from 'axios';
import * as functions from 'firebase-functions';

const MICRO_CMS_API_KEY = functions.config().microcms.api_key

@Controller('members')
export class MembersController {
  @Get(':id')
  async getMember(@Param() params): Promise<Member> {
    const memberId = params.id
    const response = await axios.request<Member>({
      method: 'GET',
      url: `https://toipptakosan11.microcms.io/api/v1/member-meta/${memberId}`,
      headers: {
        'X-API-KEY': MICRO_CMS_API_KEY
      }
    })

    return response.data
  }

  @Get()
  async getMembers(@Req() req: Request): Promise<Member[]> {
    const response = await axios.request<Members>({
      method: 'GET',
      url: 'https://toipptakosan11.microcms.io/api/v1/member-meta',
      headers: {
        'X-API-KEY': MICRO_CMS_API_KEY
      }
    })

    return response.data.contents
  }
}
