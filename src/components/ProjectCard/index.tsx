import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from '../../core/types/ComponentProps';
import { GitHub } from '@mui/icons-material';
import ReactJS from '../../assets/svgs/reactjs.svg?component';
import NodeJS from '../../assets/svgs/nodejs.svg?component';
import TS from '../../assets/svgs/ts.svg?component';
import { Tooltip } from '@mui/material';
import { GITHUB_TOOLTIP } from '../../helpers/TooltipText';
import data from '../../data/data.json';

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
      <div className={'portfolio-title-container'}>
        <div className={'title-icon-container'}>
          <h4>{name}</h4>
          <Tooltip title={GITHUB_TOOLTIP} placement={'top'}>
            <button
              className={'github-btn'}
              onClick={(e) => handleSeeOnGitHub(e)}
            >
              <GitHub className={'github-icon'} />
            </button>
          </Tooltip>
        </div>
        <div className={'half-blue-line'} />
      </div>
      <p>{description}</p>
      <div className={'icons-container'}>
        {skills.map((skill) => {
          if (skill.toLowerCase() === 'reactjs')
            return (
              <Tooltip key={skill} title={skill}>
                <ReactJS className={'icon'} />
              </Tooltip>
            );
          else if (skill.toLowerCase() === 'nodejs')
            return (
              <Tooltip key={skill} title={skill}>
                <NodeJS className={'icon'} />
              </Tooltip>
            );
          else if (skill.toLowerCase() === 'typescript')
            return (
              <Tooltip key={skill} title={skill}>
                <TS className={'icon'} />
              </Tooltip>
            );
          else return '';
        })}
      </div>
    </Link>
  );
};

export default ProjectCard;
