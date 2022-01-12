import { rawGithubAPI, githubAPI } from '../api';

// GET README
export async function getReadme(projectId: string) {
  const response = await rawGithubAPI.get(`/${projectId}/master/README.md`);
  return response.data;
}

// GET REPOSITORY INFO
export async function getRepositoriesInfo() {
  const response = await githubAPI.get(`/users/carolcarvalhosa/repos`);
  return response.data;
}
