export const parseRepoFetch = (repoFetch: any) => {
  return {
    userName: repoFetch.owner?.login,
    userImg: repoFetch.owner?.avatar_url,
    name: repoFetch.name,
    description: repoFetch.description,
    url: repoFetch.html_url,
    contributions: repoFetch.network_count ?? 0,
    issues: repoFetch.open_issues_count ?? 0,
    stars: repoFetch.stargazers_count ?? 0,
    forks: repoFetch.forks_count ?? 0,
    languages_url: repoFetch.languages_url,
  }
}
