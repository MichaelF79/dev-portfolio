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
        <SectionTitle>Tech Stack</SectionTitle>
        <div>
          <Pill>
            <div>
              <img className={styles.img} src="./assets/vscode.svg" alt="vscode" />
              <img className={styles.img} src="./assets/figma.svg" alt="figma" />
              <img className={styles.img} src="./assets/git.svg" alt="git"/>
              <img className={styles.img} src="./assets/github.svg" alt="github" />
              <img className={styles.img} src="./assets/html5.svg" alt="html5" />
              <img className={styles.img} src="./assets/css3.svg" alt="css3" /> 
              <img className={styles.img} src="./assets/sass.svg" alt="sass" />
              <img className={styles.img} src="./assets/javascript.svg" alt="js" />
              <img className={styles.img} src="./assets/react.svg" alt="react" />
              <img className={styles.img} src="./assets/react-router.svg" alt="react-router" />
              <img className={styles.img} src="./assets/nodejs.svg" alt="node.js"/>
            </div>
          </Pill>
        </div>
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