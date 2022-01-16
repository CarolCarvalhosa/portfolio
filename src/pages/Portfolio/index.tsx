import React, { useEffect, useMemo, useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useStyles } from './styles';
import data from '../../data/data.json';
import ProjectCard from '../../components/ProjectCard';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import { PortfolioData, Repository } from '../../core/types/DataTypes';
import { GetAppRounded } from '@material-ui/icons';
import { DOWNLOAD_DISABLED_TOOLTIP, DOWNLOAD_TOOLTIP } from '../../helpers/TooltipText';
import ResumePDF from '../ResumePDF';
import { Tooltip } from '@material-ui/core';
import { useLocation } from 'react-router-dom';
import { getRepositoriesInfo } from '../../services/routes/github.routes';

type LocationParams = {
  state: {
    id: string;
  };
};

const Portfolio: React.FC = () => {
  const classes = useStyles();
  const location = useLocation() as LocationParams;

  const [portfolio, setPortfolio] = useState<PortfolioData | undefined>();
  const [repositories, setRepositories] = useState<Repository[]>([]);

  const canDownload = useMemo(() => {
    return portfolio?.projects.length !== 0;
  }, [portfolio]);

  const fetchGithubRepositoriesInfo = async () => {
    try {
      const response = await getRepositoriesInfo();
      setRepositories(response);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
  };

  useEffect(() => {
    setPortfolio(data.portfolios.find((portfolio) => portfolio.id === location?.state?.id));
    fetchGithubRepositoriesInfo();
  }, [location?.state?.id]);

  return (
    <div className={classes.root}>
      <PersonalInfoCard
        name={data.name}
        avatar={data.avatar}
        occupation={data.occupation}
        education={data.education}
      />
      <div className={'projects-container'}>
        <div className={'name-and-icon-container'}>
          <h1>{portfolio?.name}</h1>
          <Tooltip
            title={canDownload ? DOWNLOAD_TOOLTIP : DOWNLOAD_DISABLED_TOOLTIP}
            placement={'top'}
          >
            <button
              disabled={!canDownload}
              className={canDownload ? 'download-btn' : 'download-btn-disabled'}
            >
              {canDownload ? (
                <PDFDownloadLink document={<ResumePDF />} fileName={`${data.name} - Resume.pdf`}>
                  <GetAppRounded className={'download-icon'} />
                </PDFDownloadLink>
              ) : (
                <GetAppRounded className={'download-icon-disabled'} />
              )}
            </button>
          </Tooltip>
        </div>
        <div className={'project-cards-container'}>
          {repositories.length > 0 &&
            portfolio?.projects?.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={repositories.find((x) => x.name === project.id)?.description}
                skills={project.skills}
                portfolioId={portfolio?.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
