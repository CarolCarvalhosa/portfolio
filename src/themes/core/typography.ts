import { TypographyOptions } from '@mui/material/styles/createTypography';

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen","Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",sans-serif';

// TODO: Use colors from palette
export const typography: TypographyOptions = {
  // Heading 1 (h1)
  h1: {
    fontFamily: fontFamily,
    color: '#735aab',
    fontSize: '2.5rem',
    fontWeight: 500,
    margin: 0,
  },
  // Heading 2 (h2)
  h2: {
    fontSize: 36,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Heading 3 (h3)
  h3: {
    fontSize: 24,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Heading 4 (h4)
  h4: {
    fontSize: 18,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Heading 5 (h5)
  h5: {
    fontSize: 14,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Heading 6 (h6)
  h6: {
    fontSize: 12,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Text Link (a)
  caption: {
    fontSize: 14,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Variant between h5 and h4
  subtitle1: {
    fontSize: 16,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Label (label)
  subtitle2: {
    fontSize: 14,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Button (button)
  button: {
    fontSize: 14,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
  // Body Text (p)
  body1: {
    fontSize: 14,
    padding: 0,
    fontFamily: fontFamily,
    margin: 0,
  },
  // Small Text (span)
  body2: {
    fontSize: 12,
    fontFamily: fontFamily,
    margin: 0,
    color: '#fff',
  },
};
