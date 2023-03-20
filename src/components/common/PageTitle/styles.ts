import { CustomTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles<CustomTheme>((theme) => ({
  root: {
    '& h1': {
      margin: '0.67em 0em',
    },
  },
}));
