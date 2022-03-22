import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { Web, SportsEsports, Brush } from '@material-ui/icons';
import { PortfolioCardProps } from '../../core/types/ComponentProps';
import { Tooltip } from '@material-ui/core';

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  name,
  description,
  active,
}) => {
  const classes = useStyles({ active: active });

  const RenderIcon = () => {
    if (id === 'web-mobile-dev') return <Web className={'title-icon'} />;
    else if (id === 'game-dev')
      return <SportsEsports className={'title-icon'} />;
    else if (id === 'design-art') return <Brush className={'title-icon'} />;
    else return <></>;
  };

  return (
    <Tooltip title={!active ? 'Not available yet' : ''}>
      <Link
        className={classes.root}
        to={{ pathname: `/portfolio/${id}` }}
        state={{ id }}
        // disable link if portfolio is not active
        onClick={(e) => (!active ? e.preventDefault() : null)}
      >
        <div className={'portfolio-title-container'}>
          <div className={'title-icon-container'}>
            <RenderIcon />
            <h4>{name}</h4>
          </div>
          <div className={'half-blue-line'} />
        </div>
        <p>{description}</p>
      </Link>
    </Tooltip>
  );
};

export default PortfolioCard;
