import { StyleSheet } from '@react-pdf/renderer';

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
    marginBottom: 10,
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
  subtitleBold: {
    fontSize: 15,
    fontWeight: 'bold', // fix
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
    margin: 'auto',
  },
  bodyTitle: {
    fontSize: 15,
    color: '#484848',
    marginTop: 30,
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
  // end body
});
