import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<Theme>((theme) => ({
  root: {
    'position': 'relative',
    'width': 'min-content',
    'textAlign': 'center',
    'background': theme.palette.background.secondary.enabled,
    'padding': '2%',
    'borderRadius': '40px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '5%',
    },

    '& .rounded-picture': {
      width: '250px',
      height: '250px',
      border: `10px solid ${theme.palette.highlight}`,
      borderRadius: '50%',
      marginTop: '0.5em',
      [theme.breakpoints.down('md')]: {
        width: '200px',
        height: '200px',
      },
    },

    '& .blue-line': {
      background: theme.palette.highlight,
      width: '100%',
      height: '5px',
      borderRadius: '50px',
    },

    '& .arrow-back-btn': {
      position: 'absolute',
      left: 20,
      top: 20,
      border: 0,
      cursor: 'pointer',
      background: 'transparent',
    },

    '& .arrow-back-icon': {
      color: theme.palette.text.primary,
    },
  },
}));
