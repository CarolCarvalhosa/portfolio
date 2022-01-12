import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { styles } from './styles';
import data from '../../data/data.json';

const ResumePDF: React.FC = () => {
  const [name, setName] = useState('');

  const getPortfolioShowName = () => {
    return data.name
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toUpperCase();
  };

  useEffect(() => {
    setName(getPortfolioShowName);
  }, []);

  return (
    <Document title={`${data.name} - Resume`}>
      <Page size="A4" style={styles.page} orientation="portrait">
        <View style={styles.grayBar}></View>
        <View style={styles.header}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{data.occupation.toUpperCase()}</Text>
          <View style={styles.lightLine}></View>
          <Text style={styles.summary}>{data.summary}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyLeft}>
            <View style={styles.bodyTitleContainer}>
              <Text style={styles.bodyTitle}>CONTACT INFO</Text>
              <View style={styles.darkLine}></View>
              <View style={styles.textIconDiv}>
                <Text style={styles.iconFont}>M</Text>
                <Text style={styles.bodyText}>{data.mail}</Text>
              </View>
              <Text style={styles.bodyText}>{data.linkedin}</Text>
            </View>
            <View style={styles.bodyTitleContainer}>
              <Text style={styles.bodyTitle}>HARD SKILLS</Text>
              <View style={styles.darkLine}></View>
              {data.skills.map((skill, idx) => (
                <Text key={idx} style={styles.bodyText}>
                  - {skill}
                </Text>
              ))}
            </View>
            <View style={styles.bodyTitleContainer}>
              <Text style={styles.bodyTitle}>SOFT SKILLS</Text>
              <View style={styles.darkLine}></View>
              <Text style={styles.bodyText}>- COMPLETE</Text>
            </View>
            <View style={styles.bodyTitleContainer}>
              <Text style={styles.bodyTitle}>AWARDS & MEMBERSHIPS</Text>
              <View style={styles.darkLine}></View>
              <Text style={styles.bodyText}>- COMPLETE</Text>
            </View>
          </View>
          <View style={styles.bodyRight}>
            <View style={styles.bodyTitleContainer}>
              <Text style={styles.bodyTitle}>MY WORK HISTORY</Text>
              <View style={styles.darkLine}></View>
              <Text style={styles.bodySubtitle}>JUNIOR STAFF</Text>
              <Text style={styles.bodyText}>Email: ccscarvalhosa@gmail.com</Text>
              <Text style={styles.bodyText}>https://www.linkedin.com/in/carolina-carvalhosa/</Text>
            </View>
            <View style={styles.bodyTitleContainer}>
              <Text style={styles.bodyTitle}>MY EDUCATION HISTORY</Text>
              <View style={styles.darkLine}></View>
              <Text style={styles.bodyText}>
                - {data.education} at {data.university} ends in {data.educationEndDate}.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.darkBar}></View>
        <View style={styles.grayBar}></View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
