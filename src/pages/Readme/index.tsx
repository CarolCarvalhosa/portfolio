import React, { useEffect, useState } from 'react';
import { Tooltip } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';
import { useStyles } from './styles';
import data from '../../data/data.json';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import { ProjectData } from '../../core/types/DataTypes';
import ReadmeCard from '../../components/ReadmeCard';
import { GITHUB_TOOLTIP } from '../../helpers/TooltipText';
import { useLocation } from 'react-router-dom';

type LocationParams = {
  key: string;
  id: string;
};

const Readme: React.FC = () => {
  const classes = useStyles();
  const location = useLocation<LocationParams>();

  const [project, setProject] = useState<ProjectData | undefined>();

  useEffect(() => {
    setProject(
      data.portfolios
        .find((portfolio) => portfolio.id === location?.state?.key)
        ?.projects.find((project) => project.id === location?.state?.id)
    );
  }, [location?.state?.id, location?.state?.key]);

  const handleSeeOnGitHub = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.open(`https://github.com/${data.github}/${project?.id}`, '_blank');
  };

  return (
    <div className={classes.root}>
      <PersonalInfoCard
        name={data.fullName}
        avatar={data.avatar}
        occupation={data.occupation}
        education={data.education}
      />
      <div className="projects-container">
        <div className="name-and-icon-container">
          <h1>{project?.name}</h1>
          <Tooltip title={GITHUB_TOOLTIP} placement="top">
            <button className="github-btn" onClick={(e) => handleSeeOnGitHub(e)}>
              <GitHub className="github-icon" />
            </button>
          </Tooltip>
        </div>
        <div className="project-cards-container">
          <ReadmeCard id={project?.id} handleSeeOnGitHub={handleSeeOnGitHub} />
        </div>
      </div>
    </div>
  );
};

export default Readme;
