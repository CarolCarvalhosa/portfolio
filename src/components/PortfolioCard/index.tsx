import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { PortfolioCardProps } from '../../types/ComponentProps';

const PortfolioCard: React.FC<PortfolioCardProps> = ({ id, name, description }) => {
    const classes = useStyles();

    return (
        <Link className={classes.root} to={`/portfolio/${id}`}>
            <div className={'portfolio-title-container'}>
                <h4>{name}</h4>
                <div className={'half-blue-line'} />
            </div>
            <p>{description}</p>
        </Link>
    );
}

export default PortfolioCard;