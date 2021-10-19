import axios from 'axios';
import { ref } from "vue"
import { Member } from "./interfaces/member.interface"

// const baseUrl = 'https://asia-northeast1-toipptakosan11-71185.cloudfunctions.net/api'
const baseUrl = 'http://localhost:5001/toipptakosan11-71185/asia-northeast1/api/graphql'

export default function useMembers () {
  const member = ref<Member>()
  const getMember = async (id: string) => {
    const res = await axios.request<Member>({
      method: 'GET',
      url: baseUrl + `/members/${id}`,
    })

    member.value = res.data
  }

  const members = ref<Member[]>([])
  const getMembers = async () => {
    const res = await axios.request<Member[]>({
      method: 'GET',
      url: baseUrl + '/members'
    })

    members.value = res.data
  }

  return {
    member,
    getMember,

    members,
    getMembers
  }
}