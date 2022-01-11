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
