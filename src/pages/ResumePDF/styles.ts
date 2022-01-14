import { StyleSheet, Font } from '@react-pdf/renderer';
import ByomIconsSrc from '../../fonts/Byom-Icons.ttf';

// Register font
Font.register({ family: 'ByomIcons', format: 'truetype', src: ByomIconsSrc });

export const styles = StyleSheet.create({
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
    backgroundColor: '#FFFFFF',
  },
  darkLine: {
    height: '1px',
    width: '240px',
    margin: 'auto',
    marginTop: 5,
    backgroundColor: '#484848',
  },
  grayBar: {
    height: 22,
    backgroundColor: '#D9D9D9',
    width: '100%',
  },
  darkBar: {
    height: 22,
    backgroundColor: '#484848',
    width: '100%',
  },
  // end global

  // begin header
  header: {
    textAlign: 'center',
    backgroundColor: '#484848',
    color: 'white',
    padding: '40 0',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: 'normal', // fix
    marginTop: 10,
  },
  summary: {
    fontSize: 10,
    margin: '0 70',
  },
  // end header

  // begin body
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  bodyLeft: {
    flex: 1,
    backgroundColor: 'white',
  },
  bodyRight: {
    flex: 1,
    backgroundColor: '#D9D9D9',
  },
  bodyTitleContainer: {
    flex: 1,
    margin: 'auto',
    maxWidth: '240px',
  },
  bodyTitleContainerEnd: {
    margin: 'auto',
    maxWidth: '240px',
    marginBottom: '20px',
  },
  bodyTitleContainerFlex: {
    flex: 1,
    margin: 'auto',
    maxWidth: '240px',
  },
  iconBodyTitleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  bodyTitleHeader: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  bodyTitle: {
    fontSize: 15,
    color: '#484848',
  },
  bodySubtitle: {
    fontSize: 14,
    fontWeight: 'bold', // fix
    color: '#484848',
  },
  bodyText: {
    fontSize: 11,
    color: '#484848',
    marginTop: 2,
  },
  bodyTextWithIcon: {
    fontSize: 11,
    color: '#484848',
  },
  iconFont: {
    fontFamily: 'ByomIcons',
    marginRight: '10px',
  },
  textIconDiv: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: '15px',
    marginRight: '5px',
  },
  // end body
});
