import { PaletteOptions } from '@mui/material';
import { palette } from '../themes/DarkTheme';

type DefaultPalette = typeof palette;

declare module '@mui/material/styles/createPalette' {
  export interface CustomPalette
    extends Omit<PaletteOptions, 'background' | 'text' | 'mode'>,
      DefaultPalette {}
}
