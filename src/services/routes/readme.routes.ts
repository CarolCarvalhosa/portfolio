import api from '../api';

// GET
export async function getReadme(projectId: string) {
  const response = await api.get(`/${projectId}/master/README.md`);
  return response.data;
}
