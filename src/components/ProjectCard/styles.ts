import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    'textDecoration': 'none',
    'minWidth': '80%',
    'textAlign': 'left',
    'background': '#222222',
    'border': 'solid 3px #222222',
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
      border: 'solid 3px #00CED1',
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
      color: '#00CED1',
    },

    '& .github-btn:hover .github-icon': {
      color: '#FFFFFF',
    },

    '& .portfolio-title-container': {
      width: 'max-content',
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

    '& .icons-container': {
      display: 'flex',
      justifyContent: 'flex-start',
    },

    '& .icon': {
      marginRight: '5px',
      height: '40px',
    },
  },
}));
