import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';
import styles from '../Me/Me.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'


const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>About Me</SectionTitle>
        <Paragraph>{user.basics.summary}</Paragraph>
      </div>
      <div>
        <SectionTitle>Soft Skills</SectionTitle>
        <Paragraph>
          <ul>
            <li>•	 Communication</li>
            <li>•	 Leadership</li>
            <li>•	 Teamwork and Collaboration</li>
            <li>•	 Problem-Solving</li>
            <li>•	 Time Management</li>
            <li>•	 Self-Motivation</li>
          </ul>
        </Paragraph>
      </div>
      <div>
        <SectionTitle>Tech Stack</SectionTitle>
        <Pill>

          
          <img className={styles.img} src='/assets/images/html5.png' alt="html5" />
          <img className={styles.img} src='/assets/images/css3.png' alt="css3" /> 
          <img className={styles.img} src='/assets/images/sass.png' alt="sass" />
          <img className={styles.img} src='/assets/images/javascript.png' alt="js" />
          <img className={styles.img} src='/assets/images/react.png' alt="react" />
          <img className={styles.img} src='/assets/images/figma.png' alt="figma" />
          <img className={styles.img} src='/assets/images/github.png' alt="github" />
          <img className={styles.img} src='/assets/images/git-icon.png' alt="git"/>
          <img className={styles.img} src='/assets/images/vscode.png' />
          <img className={styles.img} src='/assets/images/nodejs.png' alt="node.js"/>          
        </Pill>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;