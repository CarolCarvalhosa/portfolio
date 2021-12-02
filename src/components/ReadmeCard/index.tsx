import React, { useEffect, useState } from 'react';
import { useStyles } from './styles';
import { ReadmeProps } from '../../types/ComponentProps';
import ReactMarkdown from 'react-markdown';
import { getReadme } from '../../services/routes/readme.routes';

const ReadmeCard: React.FC<ReadmeProps> = ({ id, name, portfolioId }) => {
  const classes = useStyles();

  const [rawReadme, setRawReadme] = useState<string>('');

  useEffect(() => {
    if (id) fetchReadme(id);
  }, [id]);

  const fetchReadme = async (projectId: string) => {
    const response = await getReadme(projectId);
    setRawReadme(response);
  };

  return (
    <div className={classes.root}>
      <div className={'portfolio-title-container'}>
        <div className={'title-icon-container'}>
          <h4>README.md</h4>
        </div>
        <div className={'half-blue-line'} />
      </div>
      <div className={'readme-container'}>
        <ReactMarkdown>{rawReadme}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ReadmeCard;
