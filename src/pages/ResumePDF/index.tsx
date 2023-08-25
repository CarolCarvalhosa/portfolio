import React, { useEffect, useState } from 'react';
import ReactPDF from '@react-pdf/renderer';
import { PDFStyles } from './styles';
import data from '../../data/data.json';
import MailIcon from '../../assets/pngs/mail.png';
import LinkedinIcon from '../../assets/pngs/linkedin.png';
import GithubIcon from '../../assets/pngs/github.png';
import LanguageIcon from '../../assets/pngs/language.png';
import ContactInfoIcon from '../../assets/pngs/contact-info.png';
import HardSkillsIcon from '../../assets/pngs/hard-skills.png';
import SoftSkillsIcon from '../../assets/pngs/soft-skills.png';
import WorkHistoryIcon from '../../assets/pngs/work-history.png';
import EducationIcon from '../../assets/pngs/education.png';
import { CustomTheme, useTheme } from '@mui/material';

const { Page, Text, View, Document, Image, Link } = ReactPDF;

const ResumePDF: React.FC = () => {
  const theme = useTheme<CustomTheme>();
  const styles = PDFStyles(theme);
  const [name, setName] = useState('');

  const getPortfolioShowName = () => {
    return data.name.toUpperCase();
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
            <View style={{ ...styles.topicContainer, flex: 0.2 }}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={ContactInfoIcon} />
                  <Text style={styles.bodyTitle}>INFO</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <View style={styles.topicDescription}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={MailIcon} />
                  <Text style={styles.bodyText}>{data.mail}</Text>
                </View>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={LinkedinIcon} />
                  <Text style={styles.bodyText}>{data.linkedin}</Text>
                </View>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={GithubIcon} />
                  <Link style={styles.link} src={data.githubLink}>
                    <Text style={styles.bodyText}>@{data.github}</Text>
                  </Link>
                </View>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={LanguageIcon} />
                  <Text style={styles.bodyText}>English and Portuguese</Text>
                </View>
              </View>
            </View>
            <View style={{ ...styles.topicContainer, flex: 0.35 }}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={HardSkillsIcon} />
                  <Text style={styles.bodyTitle}>HARD SKILLS</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <View style={styles.topicDescription}>
                {data.skills.map((skill, idx) => (
                  <Text key={idx} style={styles.bodyText}>
                    - {skill}
                  </Text>
                ))}
              </View>
            </View>
            <View style={{ ...styles.topicContainer, flex: 0.45 }}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={SoftSkillsIcon} />
                  <Text style={styles.bodyTitle}>SOFT SKILLS</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <View style={styles.topicDescription}>
                {data.softSkills.map((skill, idx) => (
                  <View key={idx}>
                    <Text style={styles.bodyText}>- {skill.title}</Text>
                    <Text style={styles.bodyText}>{skill.description}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.bodyRight}>
            <View style={{ ...styles.topicContainer, flex: 1 }}>
              <View style={{ ...styles.topicHeader, marginBottom: 5 }}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={WorkHistoryIcon} />
                  <Text style={styles.bodyTitle}>WORK HISTORY</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <View style={styles.topicDescription}>
                {data.workHistory.map((work, idx) => (
                  <View key={idx} style={{ marginTop: '10px' }}>
                    <Text
                      style={{ ...styles.bodyTextBold, marginBottom: '5px' }}
                    >
                      {work.occupation} - {work.place}
                    </Text>
                    {work.projects.map((project, idx) => (
                      <Text
                        key={idx}
                        style={{
                          ...styles.bodyTextSmall,
                          marginBottom: '5px',
                        }}
                      >
                        - {project}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.darkBar}>
          <Text style={styles.bodyTextWhite}>{data.website}</Text>
        </View>
        <View style={styles.grayBar} />
      </Page>
      <Page size="A4" style={styles.page} orientation="portrait">
        <View style={styles.grayBar} />
        <View style={styles.darkBar}>
          <Text style={styles.bodyTextWhite}>{data.website}</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyLeft}>
            <View style={styles.topicContainer}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={HardSkillsIcon} />
                  <Text style={styles.bodyTitle}>CODE CONTRIBUTIONS</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <View style={styles.topicDescription}>
                {data.codeContributions.map((contribution, idx) => (
                  <View key={idx} style={{ marginTop: '10px' }}>
                    <Text
                      style={{
                        ...styles.bodyTextBold,
                        marginBottom: '5px',
                      }}
                    >
                      {contribution.occupation}
                    </Text>
                    {contribution.projects.map((project, idx) => (
                      <Text
                        key={idx}
                        style={{
                          ...styles.bodyTextSmall,
                          marginBottom: '5px',
                        }}
                      >
                        - {project}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View style={styles.bodyRight}>
            <View style={styles.topicContainer}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={EducationIcon} />
                  <Text style={styles.bodyTitle}>EDUCATION HISTORY</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <Text style={styles.bodyTextSmall}>
                <Text style={{ ...styles.bodyTextSmall, fontWeight: 'bold' }}>
                  {data.education.toUpperCase()} AT {data.university}{' '}
                </Text>
                ({data.universityFullName}) [03/2017 - {data.educationEndDate}]
              </Text>
              <View style={styles.topicDescription}>
                {data.educationHistory.map((education, idx) => (
                  <View key={idx} style={{ marginTop: '10px' }}>
                    <Text
                      style={{
                        ...styles.bodyTextBold,
                        marginBottom: '5px',
                      }}
                    >
                      {education.occupation} - {education.place}
                    </Text>
                    {education.projects.map((project, idx) => (
                      <Text
                        key={idx}
                        style={{
                          ...styles.bodyTextSmall,
                          marginBottom: '5px',
                        }}
                      >
                        - {project}
                      </Text>
                    ))}
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
        <View style={styles.darkBar}>
          <Text style={styles.bodyTextWhite}>{data.website}</Text>
        </View>
        <View style={styles.grayBar} />
      </Page>
    </Document>
  );
};

export default ResumePDF;
