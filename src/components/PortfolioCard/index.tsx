import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { Web, SportsEsports, Brush } from '@material-ui/icons';
import { PortfolioCardProps } from '../../types/ComponentProps';

const PortfolioCard: React.FC<PortfolioCardProps> = ({ id, name, description }) => {
  const classes = useStyles();

  const RenderIcon = () => {
    if (id === 'web-mobile-dev') return <Web className={'title-icon'} />;
    else if (id === 'game-dev') return <SportsEsports className={'title-icon'} />;
    else if (id === 'design-art') return <Brush className={'title-icon'} />;
    else return <></>;
  };

  return (
    <Link className={classes.root} to={`/portfolio/${id}`}>
      <div className={'portfolio-title-container'}>
        <div className={'title-icon-container'}>
          <RenderIcon />
          <h4>{name}</h4>
        </div>
        <div className={'half-blue-line'} />
      </div>
      <p>{description}</p>
    </Link>
  );
};

export default PortfolioCard;
