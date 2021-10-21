import axios from 'axios'
import { ref } from 'vue'
import { getMember, getMembers } from '../../api'
import { GetMemberQuery, GetMembersQuery } from '../../graphql/client'

// const baseUrl = 'https://asia-northeast1-toipptakosan11-71185.cloudfunctions.net/api'
// const baseUrl = 'http://localhost:5001/toipptakosan11-71185/asia-northeast1/api'

export default function useMembers() {
  const member = ref<GetMemberQuery['getMember']>()
  const members = ref<GetMembersQuery['getMembers']>()

  return {
    member,
    getMember,

    members,
    getMembers,
  }
}
