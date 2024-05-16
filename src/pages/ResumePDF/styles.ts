import ReactPDF from '@react-pdf/renderer';
import InterRegular from '../../fonts/Inter-Regular.ttf';
import InterBold from '../../fonts/Inter-Bold.ttf';
import { CustomTheme } from '@mui/material';

const { StyleSheet, Font } = ReactPDF;

// Register font
Font.register({
  family: 'Inter',
  format: 'truetype',
  fonts: [
    { src: InterRegular, fontStyle: 'normal', fontWeight: 'normal' },
    { src: InterBold, fontStyle: 'normal', fontWeight: 'bold' },
  ],
});

// Remove hyphenation
Font.registerHyphenationCallback((word) => [word]);

export const PDFStyles = (theme: CustomTheme) => {
  return StyleSheet.create({
    // begin global
    page: {
      paddingTop: 10,
      paddingBottom: 10,
      paddingHorizontal: 10,
    },
    lightLine: {
      height: '1px',
      width: '80%',
      margin: 'auto',
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: theme.palette.pdf.background.primary,
    },
    darkLine: {
      height: '1px',
      width: '250px',
      margin: 'auto',
      marginTop: 20,
      backgroundColor: theme.palette.pdf.background.tertiary,
    },
    grayBar: {
      flex: 0.035,
      backgroundColor: theme.palette.pdf.background.secondary,
      width: '100%',
    },
    darkBar: {
      flex: 0.035,
      backgroundColor: theme.palette.pdf.background.tertiary,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
    },
    // end global

    // begin header
    header: {
      textAlign: 'center',
      backgroundColor: theme.palette.pdf.background.tertiary,
      color: theme.palette.pdf.text.secondary,
      padding: '20 0 15 0',
      fontFamily: 'Inter',
    },
    title: {
      fontSize: 40,
      letterSpacing: '2px',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 15,
      fontWeight: 'normal',
      marginTop: 10,
    },
    summary: {
      fontSize: 12,
      margin: '0 70',
    },
    // end header

    // begin body
    body: {
      flex: 1,
      flexDirection: 'row',
      fontFamily: 'Inter',
    },
    bodyLeft: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: theme.palette.pdf.background.primary,
    },
    bodyRight: {
      flex: 1,
      justifyContent: 'flex-start',
      backgroundColor: theme.palette.pdf.background.secondary,
    },
    topicContainer: {
      flex: 1,
      margin: '0 auto',
      maxWidth: '250px',
    },
    iconTextFlex: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'flex-start',
      maxHeight: '20px',
    },
    iconTextFlexCenter: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      maxHeight: '20px',
    },
    topicHeader: {
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 15,
      marginBottom: 10,
    },
    bodyTitle: {
      fontSize: 14,
      color: theme.palette.pdf.text.primary,
      fontWeight: 'bold',
    },
    bodyText: {
      fontSize: 10,
      color: theme.palette.pdf.text.primary,
      marginTop: 2,
    },
    bodyTextSmall: {
      fontSize: 9.7,
      color: theme.palette.pdf.text.primary,
      marginTop: 2,
    },
    bodyTextBold: {
      fontSize: 10,
      color: theme.palette.pdf.text.primary,
      marginTop: 2,
      fontWeight: 'bold',
    },
    bodyTextWhite: {
      fontSize: 11,
      color: theme.palette.pdf.text.secondary,
      marginTop: 2,
    },
    icon: {
      height: '15px',
      marginRight: '5px',
    },
    topicDescription: {
      flex: 1,
      flexDirection: 'column',
    },
    link: {
      textDecoration: 'none',
    },
    // end body
  });
};
