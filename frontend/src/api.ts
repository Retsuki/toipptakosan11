import { GraphQLClient } from 'graphql-request'
import { getSdk } from './graphql/client'

// const client = new GraphQLClient('/api/graphql')
const client = new GraphQLClient(
  'https://toipptakosan11-71185.web.app/api/graphql',
)
const sdk = getSdk(client)

export async function getMember(id: string) {
  const response = await sdk.getMember({ id })

  console.log(response.getMember)

  return response.getMember
}

export async function getMembers() {
  const response = await sdk.getMembers()

  console.log(response.getMembers)

  return response.getMembers
}
