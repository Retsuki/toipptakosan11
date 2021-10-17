import { GraphQLClient } from "graphql-request";
import { getSdk, Member } from "./client";

const client = new GraphQLClient("http://localhost:5001/toipptakosan11-71185/asia-northeast1/api/graphql");
const sdk = getSdk(client);

async function getMember(id: string) {
  const response = await sdk.getMember({ id })
  
  console.log(response.getMember)

  return response.getMember
}