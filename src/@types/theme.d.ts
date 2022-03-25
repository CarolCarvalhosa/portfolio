import { ThemeOptions } from '@mui/material';
import { CustomPalette } from '@mui/material/styles/createPalette';

declare module '@mui/material' {
  export interface CustomThemeOptions extends Omit<ThemeOptions, 'palette'> {
    palette: CustomPalette;
  }

  export interface Theme {
    palette: CustomPalette;
  }
}
