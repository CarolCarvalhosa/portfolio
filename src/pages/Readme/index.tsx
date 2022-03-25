import React, { useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import { GitHub } from '@mui/icons-material';
import { useStyles } from './styles';
import data from '../../data/data.json';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import { ProjectData } from '../../core/types/DataTypes';
import ReadmeCard from '../../components/ReadmeCard';
import { GITHUB_TOOLTIP } from '../../core/constants/Tooltips';
import { useLocation } from 'react-router-dom';

type LocationParams = {
  state: {
    key: string;
    id: string;
  };
};

const Readme: React.FC = () => {
  const classes = useStyles();
  const location = useLocation() as LocationParams;

  const [project, setProject] = useState<ProjectData | undefined>();

  useEffect(() => {
    setProject(
      data.portfolios
        .find((portfolio) => portfolio.id === location?.state?.key)
        ?.projects.find((project) => project.id === location?.state?.id)
    );
  }, [location?.state?.id, location?.state?.key]);

  const handleSeeOnGitHub = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    window.open(`https://github.com/${data.github}/${project?.id}`, '_blank');
  };

  return (
    <div className={classes.root}>
      <PersonalInfoCard
        name={data.name}
        avatar={data.avatar}
        occupation={data.occupation}
        education={data.education}
      />
      <div className="projects-container">
        <div className="name-and-icon-container">
          <h1>{project?.name}</h1>
          <Tooltip title={GITHUB_TOOLTIP} placement="top">
            <button
              className="github-btn"
              onClick={(e) => handleSeeOnGitHub(e)}
            >
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
