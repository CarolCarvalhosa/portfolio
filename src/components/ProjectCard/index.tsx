import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from '../../core/types/ComponentProps';
import { GitHub } from '@mui/icons-material';
import ReactJS from '../../assets/svgs/reactjs.svg?component';
import NodeJS from '../../assets/svgs/nodejs.svg?component';
import TS from '../../assets/svgs/ts.svg?component';
import { Tooltip } from '@mui/material';
import { GITHUB_TOOLTIP } from '../../core/constants/Tooltips';
import data from '../../data/data.json';
import { SKILLS } from '../../core/constants/AppConstants';

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
          <h4>{name}</h4>
          <Tooltip title={GITHUB_TOOLTIP} placement="top">
            <button
              className="github-btn"
              onClick={(e) => handleSeeOnGitHub(e)}
            >
              <GitHub className="github-icon" />
            </button>
          </Tooltip>
        </div>
        <div className="half-blue-line" />
      </div>
      <p>{description}</p>
      <div className="icons-container">
        {skills.map((skill) => {
          if (skill.toLowerCase() === SKILLS.REACTJS)
            return (
              <Tooltip key={skill} title={skill}>
                <span>
                  <ReactJS className="icon" />
                </span>
              </Tooltip>
            );
          else if (skill.toLowerCase() === SKILLS.NODEJS)
            return (
              <Tooltip key={skill} title={skill}>
                <span>
                  <NodeJS className="icon" />
                </span>
              </Tooltip>
            );
          else if (skill.toLowerCase() === SKILLS.TS)
            return (
              <Tooltip key={skill} title={skill}>
                <span>
                  <TS className="icon" />
                </span>
              </Tooltip>
            );
          else return '';
        })}
      </div>
    </Link>
  );
};

export default ProjectCard;
