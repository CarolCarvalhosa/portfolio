import axios from 'axios';

export const rawGithubAPI = axios.create({
  baseURL: 'https://raw.githubusercontent.com/CarolCarvalhosa/',
});

export const githubAPI = axios.create({
  baseURL: 'https://api.github.com/',
});
