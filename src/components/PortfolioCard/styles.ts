import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

type PortfolioCardStyles = {
  active: boolean;
};

export const useStyles = makeStyles<Theme, PortfolioCardStyles>((theme) => ({
  root: {
    'textDecoration': 'none',
    'maxWidth': '35%',
    'textAlign': 'left',
    'background': theme.palette.background.secondary.enabled,
    'border': `solid 3px ${theme.palette.background.secondary.enabled}`,
    'padding': '3%',
    'borderRadius': '30px',
    'marginRight': '3%',
    'marginBottom': '3%',
    'opacity': ({ active }) => (active ? '1' : '0.5'),
    'cursor': ({ active }) => (active ? 'pointer' : 'not-allowed'),
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      flexDirection: 'column',
      margin: 0,
      padding: '8%',
    },

    '&:hover': {
      border: `solid 3px ${theme.palette.highlight}`,
    },

    '& .portfolio-title-container': {
      width: 'max-content',
    },

    '& .title-icon': {
      color: theme.palette.highlight,
      marginRight: '10px',
    },

    '& .title-icon-container': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .half-blue-line': {
      background: theme.palette.highlight,
      width: '50%',
      height: '5px',
      borderRadius: '50px',
      transition: 'all .2s ease-in-out',
    },

    '&:hover .half-blue-line': {
      transform: 'scale(1.1, 1)',
    },
  },
}));
