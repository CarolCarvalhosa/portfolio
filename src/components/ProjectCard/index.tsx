import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from '../../core/types/ComponentProps';
import { GitHub } from '@mui/icons-material';
import { Tooltip } from '@mui/material';
import { GITHUB_TOOLTIP } from '../../core/constants/Tooltips';
import data from '../../data/data.json';
import { TechnologyLogo } from '../TechnologyLogo';

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  description,
  skills,
  portfolioId,
}) => {
  const classes = useStyles();

  const handleSeeOnGitHub = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.open('https://github.com/' + data.github + '/' + id, '_blank');
  };

  return (
    <Link
      className={classes.root}
      to={{ pathname: `/readme/${portfolioId}/${id}` }}
      state={{ id: id, key: portfolioId }}
    >
      <div className="portfolio-title-container">
        <div className="title-icon-container">
          <div className="text-max-size">
            <h4 className="overflow-ellipsis">{name}</h4>
          </div>
          <Tooltip title={GITHUB_TOOLTIP} placement="top">
            <button
              className="github-btn"
              onClick={(e) => handleSeeOnGitHub(e)}
            >
              <GitHub className="github-icon" />
            </button>
          </Tooltip>
        </div>
        <div className="half-line" />
      </div>
      <p>{description}</p>
      <div className="icons-container">
        {skills.map((skill, idx) => (
          <TechnologyLogo key={idx} skill={skill} />
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
