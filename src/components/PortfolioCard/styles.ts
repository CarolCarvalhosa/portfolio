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
    'background': '#222222',
    'border': 'solid 3px #222222',
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
      border: 'solid 3px #00CED1',
    },

    '& .portfolio-title-container': {
      width: 'max-content',
    },

    '& .title-icon': {
      color: '#00CED1',
      marginRight: '10px',
    },

    '& .title-icon-container': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .half-blue-line': {
      background: '#00CED1',
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
