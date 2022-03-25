import React, { useEffect, useMemo, useState } from 'react';
import ReactPDF from '@react-pdf/renderer';
import { useStyles } from './styles';
import data from '../../data/data.json';
import ProjectCard from '../../components/ProjectCard';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import { PortfolioData, Repository } from '../../core/types/DataTypes';
import { GetAppRounded } from '@mui/icons-material';
import {
  DOWNLOAD_DISABLED_TOOLTIP,
  DOWNLOAD_TOOLTIP,
} from '../../core/constants/Tooltips';
import ResumePDF from '../ResumePDF';
import { Tooltip, Skeleton, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { getRepositoriesInfo } from '../../services/routes/github.routes';

const { PDFDownloadLink } = ReactPDF;

type LocationParams = {
  state: {
    id: string;
  };
};

const Portfolio: React.FC = () => {
  const classes = useStyles();
  const location = useLocation() as LocationParams;
  const theme = useTheme();

  const [portfolio, setPortfolio] = useState<PortfolioData | undefined>();
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loadingProjectCards, setLoadingProjectCards] = useState<boolean>(true);
  const loadingProjectCardsSkeletonQuantity = Array.from(new Array(2));

  const canDownload = useMemo(() => {
    return portfolio?.projects.length !== 0;
  }, [portfolio]);

  const fetchGithubRepositoriesInfo = async () => {
    try {
      const response = await getRepositoriesInfo(data.github);
      setRepositories(response);
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    } finally {
      setLoadingProjectCards(false);
    }
  };

  useEffect(() => {
    setPortfolio(
      data.portfolios.find((portfolio) => portfolio.id === location?.state?.id)
    );
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
      <div className="projects-container">
        <div className="name-and-icon-container">
          <h1>{portfolio?.name}</h1>
          <Tooltip
            title={canDownload ? DOWNLOAD_TOOLTIP : DOWNLOAD_DISABLED_TOOLTIP}
            placement="top"
          >
            <button
              disabled={!canDownload}
              className={canDownload ? 'download-btn' : 'download-btn-disabled'}
            >
              {canDownload ? (
                <PDFDownloadLink
                  document={<ResumePDF />}
                  fileName={`${data.name} - Resume.pdf`}
                >
                  <GetAppRounded className="download-icon" />
                </PDFDownloadLink>
              ) : (
                <GetAppRounded className="download-icon-disabled" />
              )}
            </button>
          </Tooltip>
        </div>
        <div className="project-cards-container">
          {loadingProjectCards
            ? loadingProjectCardsSkeletonQuantity.map((skeleton, idx) => (
                <Skeleton
                  key={idx}
                  sx={{
                    backgroundColor: theme.palette.background.secondary.loading,
                    borderRadius: '20px',
                    marginBottom: '25px',
                  }}
                  variant="rectangular"
                  height="200px"
                  width="90%"
                ></Skeleton>
              ))
            : repositories.length > 0 &&
              portfolio?.projects?.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  description={
                    repositories.find((x) => x.name === project.id)?.description
                  }
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
