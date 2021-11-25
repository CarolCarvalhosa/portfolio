import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    page: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      backgroundColor: '#E4E4E4'
    },
    header: {
        textAlign: 'center',
        backgroundColor: '#484848',
        color: 'white'
      },
      whiteLine: {
        height: '1px',
        width: '80%',
        margin: 'auto',
        backgroundColor: '#FFFFFF',
      }
});