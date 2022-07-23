import { axios } from '../lib/axios'

export type UserRepoResponse = {
  id: number
  name: string
  stargazers_count: number
}

export const getUserRepos = (username: string): Promise<UserRepoResponse[]> => {
  return axios.get(`/users/${username}/repos`, {
    params: {
      per_page: 100,
      type: 'owner',
      sort: 'updated',
    },
  })
}
