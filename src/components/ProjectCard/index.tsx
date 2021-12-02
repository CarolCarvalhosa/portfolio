import React from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { ProjectCardProps } from '../../types/ComponentProps';
import { GitHub } from '@material-ui/icons';
import { ReactComponent as ReactJS } from '../../svgs/reactjs.svg';
import { ReactComponent as NodeJS } from '../../svgs/nodejs.svg';
import { ReactComponent as TS } from '../../svgs/ts.svg';
import { Tooltip } from '@material-ui/core';
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

  const handleSeeOnGitHub = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.open('https://github.com/' + data.github + '/' + id, '_blank');
  };

  return (
    <Link className={classes.root} to={`/readme/${portfolioId}/${id}`}>
      <div className={'portfolio-title-container'}>
        <div className={'title-icon-container'}>
          <h4>{name}</h4>
          <Tooltip title={GITHUB_TOOLTIP} placement={'top'}>
            <button className={'github-btn'} onClick={(e) => handleSeeOnGitHub(e)}>
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
