import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles/createPalette' {
  export interface CustomPalette extends Omit<PaletteOptions, 'background'> {
    background: {
      primary: string;
      secondary: {
        enabled: string;
        disabled: string;
        loading: string;
      };
    };
    text: {
      primary: string;
      highlight: string;
    };
    highlight: string;
    disabled: string;
    button: {
      primary: {
        background: string;
        text: string;
      };
    };
    pdf: {
      background: {
        primary: string;
        secondary: string;
      };
      text: {
        primary: string;
        secondary: string;
      };
    };
  }
}
