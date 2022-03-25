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

    '& .portfolios-container': {
      marginLeft: '3%',
      [theme.breakpoints.down('md')]: {
        marginLeft: 0,
      },
    },

    '& .portfolio-cards-container': {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'space-around',
      height: 'max-content',
      [theme.breakpoints.down('md')]: {
        flexWrap: 'unset',
        flexDirection: 'column',
        rowGap: '20px',
      },
    },
  },
}));
