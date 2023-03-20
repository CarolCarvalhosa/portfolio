import '../@types/palette.d.ts';
import '../@types/theme.d.ts';
import { CustomThemeOptions, PaletteMode } from '@mui/material';
import { createTheme, ThemeOptions } from '@mui/material/styles';
import { typography } from './core/typography';

export const palette = {
  mode: 'dark' as PaletteMode,
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
    highlight: '#735aab',
  },
  highlight: '#735aab',
  disabled: '#9A9A9A',
  button: {
    primary: {
      background: '#735aab',
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
  typography: typography,
};

export default createTheme(theme as ThemeOptions);
