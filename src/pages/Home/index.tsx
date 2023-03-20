import React from 'react';
import { useStyles } from './styles';
import data from '../../data/data.json';
import PortfolioCard from '../../components/PortfolioCard';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import { PageTitle } from '../../components/common/PageTitle';

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
      <div className="portfolios-container">
        <PageTitle label={data.title} />
        <div className="portfolio-cards-container">
          {data.portfolios.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              id={portfolio.id}
              name={portfolio.name}
              description={portfolio.description}
              active={portfolio.active}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
