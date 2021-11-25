import React, { useEffect, useState } from 'react';
// import { RouteComponentProps } from 'react-router-dom';
import { useStyles } from './styles';
import data from '../../data/data.json';
import PersonalInfoCard from '../../components/PersonalInfoCard';
import { ProjectData } from '../../types/DataTypes';
import ReadmeCard from '../../components/ReadmeCard';
import { GITHUB_TOOLTIP } from '../../helpers/TooltipText';
import { Tooltip } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

const Readme: React.FC<any> = ({ ...props }) => {
    const classes = useStyles();
    const [project, setProject] = useState<ProjectData | undefined>();

    useEffect(() => {
        console.log(data.portfolios
            .find(portfolio => portfolio.id === props?.match?.params?.key));

            console.log(data.portfolios
                .find(portfolio => portfolio.id === props?.match?.params?.key)
                ?.projects.find(project => project.id === props?.match?.params?.id));
        setProject(
            data.portfolios
                .find(portfolio => portfolio.id === props?.match?.params?.key)
                ?.projects.find(project => project.id === props?.match?.params?.id)
        );
    }, [props?.match?.params?.id, props?.match?.params?.key]);

    const handleSeeOnGitHub = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        window.open(
            'https://github.com/' + data.github + '/' + project?.id,
            '_blank'
        );
    };

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
                    <h1>{project?.name}</h1>
                    <Tooltip title={GITHUB_TOOLTIP} placement={'top'}>
                        <button className={'github-btn'} onClick={(e) => handleSeeOnGitHub(e)}>
                            <GitHub className={'github-icon'} />
                        </button>
                    </Tooltip>
                </div>
                <div className={'project-cards-container'}>
                    <ReadmeCard
                        id={project?.id}
                        name={project?.name}
                        portfolioId={props?.match?.params?.key}
                    />
                </div>
            </div>
        </div>
    );
}

export default Readme;