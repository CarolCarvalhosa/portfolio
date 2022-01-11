export type PersonalInfoCardProps = {
  name: string;
  avatar: string;
  occupation: string;
  education: string;
  isOnHomePage?: boolean;
};

export type PortfolioCardProps = {
  id: string;
  name: string;
  description: string;
  active: boolean;
};

export type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  skills: string[];
  portfolioId: string;
};

export type ReadmeProps = {
  id?: string;
  name?: string;
  portfolioId?: string;
};
