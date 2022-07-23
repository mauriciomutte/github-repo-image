import { axios } from '../lib/axios'

export type RepoDetailsResponse = {
  id: number
  name: string
  description: string
  html_url: string
  network_count: number
  stargazers_count: number
  open_issues_count: number
  forks_count: number
  languages_url: string
  owner: {
    login: string
    avatar_url: string
  }
}

export const getRepoDetails = (
  username: string,
  repo: string
): Promise<RepoDetailsResponse> => {
  return axios.get(`/repos/${username}/${repo}`)
}

export const getRepoLanguages = (
  username: string,
  repo: string
): Promise<{ [key: string]: number }> => {
  return axios.get(`/repos/${username}/${repo}/languages`)
}
