import React from 'react';
import { useStyles } from './styles';
import data from '../../data/data.json';
import PortfolioCard from '../../components/PortfolioCard';
import PersonalInfoCard from '../../components/PersonalInfoCard';

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PersonalInfoCard
                name={data.name}
                avatar={data.avatar}
                occupation={data.occupation}
                education={data.education}
                isOnHomePage={true}
            />
            <div className={'portfolios-container'}>
                <h1>{data.title}</h1>
                <div className={'portfolio-cards-container'}>
                    {data.portfolios.map(portfolio => (
                        <PortfolioCard
                            key={portfolio.id}
                            id={portfolio.id}
                            name={portfolio.name}
                            description={portfolio.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;