import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { Web, SportsEsports, Brush } from '@mui/icons-material';
import { PortfolioCardProps } from '../../core/types/ComponentProps';
import { Tooltip } from '@mui/material';
import { PORTFOLIOS_IDS } from '../../core/constants/AppConstants';
import { PORTFOLIO_DISABLED_TOOLTIP } from '../../core/constants/Tooltips';

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  id,
  name,
  description,
  active,
}) => {
  const classes = useStyles({ active: active });

  const RenderIcon = () => {
    if (id === PORTFOLIOS_IDS.WEB_MOBILE) return <Web className="title-icon" />;
    else if (id === PORTFOLIOS_IDS.GAME)
      return <SportsEsports className="title-icon" />;
    else if (id === PORTFOLIOS_IDS.DESIGN)
      return <Brush className="title-icon" />;
    else return <></>;
  };

  return (
    <Tooltip title={!active ? PORTFOLIO_DISABLED_TOOLTIP : ''}>
      <Link
        className={classes.root}
        to={{ pathname: `/portfolio/${id}` }}
        state={{ id }}
        // disable link if portfolio is not active
        onClick={(e) => (!active ? e.preventDefault() : null)}
      >
        <div className="portfolio-title-container">
          <div className="title-icon-container">
            <RenderIcon />
            <h4>{name}</h4>
          </div>
          <div className="half-blue-line" />
        </div>
        <p>{description}</p>
      </Link>
    </Tooltip>
  );
};

export default PortfolioCard;
