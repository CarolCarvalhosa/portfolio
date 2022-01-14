import React, { useEffect, useState } from 'react';
import { Page, Text, View, Document, Image } from '@react-pdf/renderer';
import { styles } from './styles';
import data from '../../data/data.json';
import LinkedinIcon from '../../assets/pngs/linkedin.png';
import MailIcon from '../../assets/pngs/mail.png';
import ContactInfoIcon from '../../assets/pngs/contact-info.png';
import HardSkillsIcon from '../../assets/pngs/hard-skills.png';
import SoftSkillsIcon from '../../assets/pngs/soft-skills.png';
import WorkHistoryIcon from '../../assets/pngs/work-history.png';
import EducationIcon from '../../assets/pngs/education.png';

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
            <View style={{ ...styles.topicContainer, flex: 0.4 }}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={ContactInfoIcon} />
                  <Text style={styles.bodyTitle}>CONTACT INFO</Text>
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
              </View>
            </View>
            <View style={{ ...styles.topicContainer, flex: 0.7 }}>
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
            <View style={styles.topicContainer}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={SoftSkillsIcon} />
                  <Text style={styles.bodyTitle}>SOFT SKILLS</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <View style={styles.topicDescription}>
                <Text style={styles.bodyText}>- Fast learner</Text>
                <Text style={styles.bodyText}>
                  I love challenges and I used to work on a fast paced environment. Always looking
                  for external knowledge to increment the solution that I was implementing in the
                  company.
                </Text>
                <Text style={styles.bodyText}>- Team work</Text>
                <Text style={styles.bodyText}>
                  I used to work in large and small teams collaboratively and effectively.
                </Text>
                <Text style={styles.bodyText}>- Manage tasks</Text>
                <Text style={styles.bodyText}>
                  I can take responsibility and manage my tasks effectively.
                </Text>
                <Text style={styles.bodyText}>- Share my knowledge</Text>
                <Text style={styles.bodyText}>
                  I have didactic skills to share my knowledge with interns and other collaborators.
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.bodyRight}>
            <View style={styles.topicContainer}>
              <View style={styles.topicHeader}>
                <View style={styles.iconTextFlex}>
                  <Image style={styles.icon} source={WorkHistoryIcon} />
                  <Text style={styles.bodyTitle}>WORK HISTORY</Text>
                </View>
                <View style={styles.darkLine} />
              </View>
              <View style={styles.topicDescription}>
                <Text style={styles.bodyText}>- Software Developer</Text>
                <Text style={styles.bodyText}>Complete</Text>
                <Text style={styles.bodyText}>- Developer Intern</Text>
                <Text style={styles.bodyText}>
                  Software support and improvements in a project with MVC architecture using C#,
                  .NET, Entity Framework, SQL Server, JS, HTML, CSS, TFS, AzureDevOps and Scrum.
                </Text>
                <Text style={styles.bodyText}>- Scientific initiation scholarship</Text>
                <Text style={styles.bodyText}>
                  Visualization development using the D3 programming language framework Javascript
                  and website development support of the group working with HTML, CSS, Jekyll and
                  Git.
                </Text>
              </View>
            </View>
            <View style={styles.topicContainer}>
              <View style={styles.topicContainer}>
                <View style={styles.topicHeader}>
                  <View style={styles.iconTextFlex}>
                    <Image style={styles.icon} source={EducationIcon} />
                    <Text style={styles.bodyTitle}>EDUCATION HISTORY</Text>
                  </View>
                  <View style={styles.darkLine} />
                </View>
                <View style={styles.topicDescription}>
                  <Text style={styles.bodyText}>
                    - {data.education} at {data.university} finishes in {data.educationEndDate}.
                  </Text>
                </View>
              </View>
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
