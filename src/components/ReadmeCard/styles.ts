import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    'textDecoration': 'none',
    'minWidth': '80%',
    'textAlign': 'left',
    'background': theme.palette.background.secondary.enabled,
    'border': `solid 3px ${theme.palette.background.secondary.enabled}`,
    'padding': '3%',
    'borderRadius': '30px',
    'marginRight': '3%',
    'marginBottom': '3%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      margin: 0,
      padding: '8%',
    },

    '&:hover': {
      border: `solid 3px ${theme.palette.highlight}`,
    },

    '& .title-icon-container': {
      display: 'flex',
      alignItems: 'center',
    },

    '& .github-btn': {
      cursor: 'pointer',
      background: 'transparent',
      border: 0,
      marginLeft: '10px',
    },

    '& .github-icon': {
      color: theme.palette.highlight,
    },

    '& .github-btn:hover .github-icon': {
      color: theme.palette.text.primary,
    },

    '& .portfolio-title-container': {
      width: 'max-content',
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

    '& .icons-container': {
      display: 'flex',
      justifyContent: 'flex-start',
    },

    '& .icon': {
      marginRight: '5px',
      height: '40px',
    },

    '& .github-readme-btn-container': {
      'display': 'flex',
      'width': '100%',
      'justifyContent': 'center',

      '& .github-readme-btn': {
        'width': '95%',
        'marginTop': '20px',
        'color': theme.palette.button.primary.text,
        'fontWeight': 'bold',
        'backgroundColor': theme.palette.button.primary.background,
        'borderRadius': '20px',
        'transition': 'width 0.5s ease-in-out',

        '&:hover': {
          width: '100%',
        },
      },
    },

    '& .readme-container': {
      'background': theme.palette.background.primary,
      'marginTop': '3%',
      'padding': '3%',
      'borderRadius': '20px',
      '-ms-word-break': 'break-word',
      'word-break': 'break-word',

      '& ul': {
        color: theme.palette.text.primary,
      },
    },
  },
}));
