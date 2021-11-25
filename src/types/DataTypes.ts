export type PortfolioData = {
    id: string;
    name: string;
    description: string;
    projects: {
        id: string;
        name: string;
        description: string;
        skills: string[];
    }[];
};

export type ProjectData = {
    id: string;
    name: string;
    description: string;
    skills: string[];
};