export interface Member {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
  occupation: string[]
  self_introduction: string
  company: string
  experience_year: number
  profile_image: {
    url: string
    height: number
    width: number
  }
  sns: {
    fieldId: string
    facebook: string
    twitter: string
    github: string
  }
  experience: {
    fieldId: string
    company: string
    from: string
    describe: string
    skills: string[]
    occupation: string[]
  }[]
  skills: string[]
}
export interface GetMembers {
  contents: Member[]
  totalCount: number
  offset: number
  limit: number
}
