import React from 'react';
import { useStyles } from './styles';
import { ReadmeProps } from '../../core/types/ComponentProps';
import ReactMarkdown from 'react-markdown';
import { getReadme } from '../../services/routes/github.routes';
import { AxiosError } from 'axios';
import { Button, CircularProgress, CustomTheme, useTheme } from '@mui/material';

const ReadmeCard: React.FC<ReadmeProps> = ({ id, handleSeeOnGitHub }) => {
  const classes = useStyles();
  const theme = useTheme<CustomTheme>();

  const [rawReadme, setRawReadme] = React.useState<string>('');

  React.useEffect(() => {
    if (id) fetchReadme(id);
  }, [id]);

  const fetchReadme = async (projectId: string) => {
    try {
      const response = await getReadme(projectId);
      setRawReadme(response);
    } catch (e) {
      const error: AxiosError = e as AxiosError;

      if (error?.response?.status === 404) {
        // eslint-disable-next-line no-console
        console.error('Readme data was not found for this repository.');
        setRawReadme('Readme not found :(');
      } else {
        // eslint-disable-next-line no-console
        console.error('Unable to load readme data:', error?.response?.data);
      }
    }
  };

  return (
    <div className={classes.root}>
      <div className="portfolio-title-container">
        <div className="title-icon-container">
          <h4>README.md</h4>
        </div>
        <div className="half-blue-line" />
      </div>
      <div className="readme-container">
        {rawReadme ? (
          <ReactMarkdown>{rawReadme}</ReactMarkdown>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CircularProgress
              size={'2rem'}
              sx={{
                color: theme.palette.highlight,
                marginLeft: '15px',
              }}
            />
          </div>
        )}
      </div>
      <div className="github-readme-btn-container">
        <Button
          variant="contained"
          className="github-readme-btn"
          onClick={(e) => handleSeeOnGitHub(e)}
        >
          See this code on github
        </Button>
      </div>
    </div>
  );
};

export default ReadmeCard;
