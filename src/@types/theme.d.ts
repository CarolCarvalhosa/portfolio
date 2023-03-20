import { Theme, ThemeOptions } from '@mui/material';
import { CustomPalette } from '@mui/material/styles/createPalette';

declare module '@mui/material/styles' {
  export interface CustomThemeOptions extends Omit<ThemeOptions, 'palette'> {
    palette: CustomPalette;
  }

  export interface CustomTheme extends Omit<Theme, 'palette'> {
    palette: CustomPalette;
  }
}
