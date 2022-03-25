import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    'flex': 1,
    'display': 'flex',
    'flexDirection': 'row',
    'background': theme.palette.background.primary,
    'padding': '3%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      alignItems: 'center',
      padding: '12%',
    },

    '& .projects-container': {
      marginLeft: '3%',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
      },
    },

    '& .project-cards-container': {
      display: 'flex',
      alignItems: 'space-around',
      flexDirection: 'column',
      height: 'max-content',
      width: '100%',
      [theme.breakpoints.down('md')]: {
        flexWrap: 'unset',
        rowGap: '20px',
      },
    },

    '& .name-and-icon-container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    },

    '& .download-btn': {
      marginRight: '3%',
      cursor: 'pointer',
      background: 'transparent',
      border: 0,
    },

    '& .download-btn-disabled': {
      marginRight: '3%',
      background: 'transparent',
      border: 0,
    },

    '& .download-icon': {
      width: '45px',
      height: '45px',
      color: theme.palette.highlight,
    },

    '& .download-icon-disabled': {
      width: '45px',
      height: '45px',
      color: theme.palette.disabled,
    },
  },
}));
