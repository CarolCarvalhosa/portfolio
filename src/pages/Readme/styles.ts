import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    'flex': 1,
    'display': 'flex',
    'flexDirection': 'row',
    'background': '#111111',
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
      alignItems: 'baseline',
      justifyContent: 'flex-start',
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
      color: '#00CED1',
    },

    '& .download-icon-disabled': {
      width: '45px',
      height: '45px',
      color: '#9A9A9A',
    },

    '& .github-btn': {
      cursor: 'pointer',
      background: 'transparent',
      border: 0,
      marginLeft: '10px',
    },

    '& .github-icon': {
      color: '#00CED1',
    },

    '& .github-btn:hover .github-icon': {
      color: '#FFFFFF',
    },
  },
}));
