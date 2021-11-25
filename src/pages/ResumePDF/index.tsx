import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';
import data from '../../data/data.json';

const ResumePDF: React.FC = () => {
  const [name, setName] = useState('');

  const getName = () => {
    const fullName = data.name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toUpperCase();
    const fullNameSplit = fullName.split(' ');
    const firstName = fullNameSplit[0];
    const lastName = fullNameSplit[fullNameSplit.length - 1];
    return firstName + ' ' + lastName;
  }

  useEffect(() => {
    setName(getName);
  }, []);

  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>{name}</Text>
        <Text>{data.occupation.toUpperCase()}</Text>
        <Text>CAREER GOALS</Text>
        <View style={styles.whiteLine}></View>
        <Text>SOME TEXT</Text>
      </View>
    </Page>
  </Document>
  )
};

export default ResumePDF;