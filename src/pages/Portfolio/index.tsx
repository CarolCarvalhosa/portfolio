import React, { useEffect, useState } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import { useStyles } from './styles';
import data from '../../data/data.json';
import ProjectCard from '../../components/ProjectCard';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import { PortfolioData } from '../../types/DataTypes';
import { GetAppRounded } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import { DOWNLOAD_DISABLED_TOOLTIP, DOWNLOAD_TOOLTIP } from '../../TooltipText';

const Portfolio: React.FC<any> = ({ ...props }) => {
    const classes = useStyles();
    const [portfolio, setPortfolio] = useState<PortfolioData | undefined>();
    const canDownload = portfolio?.projects.length !== 0;

    useEffect(() => {
        setPortfolio(data.portfolios.find(portfolio => portfolio.id === props?.match?.params?.key));
    }, [props?.match?.params?.key]);

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
                    <Tooltip title={canDownload ?
                        DOWNLOAD_TOOLTIP
                        : DOWNLOAD_DISABLED_TOOLTIP} placement={'top'}>
                        <button disabled={!canDownload}
                            className={canDownload ? 'download-btn' : 'download-btn-disabled'} onClick={() => { }}>
                            <GetAppRounded className={canDownload ? 'download-icon' : 'download-icon-disabled'} />
                        </button>
                    </Tooltip>
                </div>
                <div className={'project-cards-container'}>
                    {portfolio?.projects?.map(project => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            description={project.description}
                            skills={project.skills}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;