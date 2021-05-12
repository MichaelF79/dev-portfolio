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
        <Pill>
            <div>
              <img className={styles.img} src="./assets/icons/vscode.png" alt="vscode" />
              <img className={styles.img} src="./assets/icons/figma.png" alt="figma" />
              <img className={styles.img} src="./assets/icons/git-icon.png" alt="git"/>
              <img className={styles.img} src="./assets/icons/github.png" alt="github" />
              <img className={styles.img} src="./assets/icons/html5.png" alt="html5" />
              <img className={styles.img} src="./assets/icons/css3.png" alt="css3" /> 
              <img className={styles.img} src="./assets/icons/sass.png" alt="sass" />
              <img className={styles.img} src="./assets/icons/javascript.png" alt="js" />
              <img className={styles.img} src="./assets/icons/react.png" alt="react" />
              <img className={styles.img} src="./assets/icons/react-router.png" alt="react-router" />
              <img className={styles.img} src="./assets/icons/nodejs.png" alt="node.js"/>
            </div>
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