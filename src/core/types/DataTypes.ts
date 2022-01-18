export type PortfolioData = {
  id: string;
  name: string;
  description: string;
  projects: ProjectData[];
};

export type ProjectData = {
  id: string;
  name: string;
  skills: string[];
};

export type Repository = {
  name: string;
  description: string;
};
