import '../@types/palette.d.ts';
import '../@types/theme.d.ts';
import { CustomThemeOptions } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { CustomPalette } from '@mui/material/styles/createPalette';

const palette: CustomPalette = {
  mode: 'dark',
  background: {
    primary: '#111111',
    secondary: {
      enabled: '#222222',
      disabled: '',
      loading: '#222222',
    },
  },
  text: {
    primary: '#FFFFFF',
    highlight: '#00CED1',
  },
  highlight: '#00CED1',
  disabled: '#9A9A9A',
  button: {
    primary: {
      background: '#00CED1',
      text: '#333333',
    },
  },
  pdf: {
    background: {
      primary: '#FFFFFF',
      secondary: '#D9D9D9',
      tertiary: '#484848',
    },
    text: {
      primary: '#484848',
      secondary: '#FFFFFF',
    },
  },
};

const theme: CustomThemeOptions = {
  palette: {
    ...palette,
  },
};

export default createTheme(theme as ThemeOptions);
