export type PersonalInfoCardProps = {
    name: string;
    avatar: string;
    occupation: string;
    education: string;
    isOnHomePage?: boolean;
}

export type PortfolioCardProps = {
    id: string;
    name: string;
    description: string;
}

export type ProjectCardProps = {
    id: string;
    name: string;
    description: string;
    skills: string[];
}
