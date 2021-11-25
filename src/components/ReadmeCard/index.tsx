import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { Link } from 'react-router-dom';
import { GitHub } from '@material-ui/icons';
import { Tooltip } from '@material-ui/core';
import { GITHUB_TOOLTIP } from '../../helpers/TooltipText';
import { ReadmeProps } from '../../types/ComponentProps';
import data from '../../data/data.json';
import ReactMarkdown from 'react-markdown';
import { getReadme } from '../../services/routes/readme.routes';

const ReadmeCard: React.FC<ReadmeProps> = ({ id, name, portfolioId }) => {
    const classes = useStyles();

    const [rawReadme, setRawReadme] = useState<string>('');

    useEffect(() => {
        if (id)
            fetchReadme(id);
    }, [id]);

    const fetchReadme = async (projectId: string) => {
        console.log(projectId);
        const response = await getReadme(projectId);
        console.log(response);
        setRawReadme(response);
    }

    return (
        <div className={classes.root}>
            <div className={'portfolio-title-container'}>
                <div className={'title-icon-container'}>
                    <h4>README.md</h4>
                </div>
                <div className={'half-blue-line'} />
            </div>
            <div className={'readme-container'}>
                <ReactMarkdown>
                    {rawReadme}
                </ReactMarkdown>
            </div>
        </div>
    );
}

export default ReadmeCard;