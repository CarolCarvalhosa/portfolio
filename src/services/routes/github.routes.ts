import { rawGithubAPI, githubAPI } from '../api';

// GET README
export async function getReadme(projectId: string) {
  const response = await rawGithubAPI.get(`/${projectId}/master/README.md`);
  return response.data;
}

// GET REPOSITORY INFO
export async function getRepositoriesInfo(user: string) {
  const response = await githubAPI.get(`/users/${user}/repos`);
  return response.data;
}
