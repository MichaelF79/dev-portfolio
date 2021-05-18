import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';
import { ProfileLink } from './styles';
import styles from '../Me/Me.module.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fab } from '@fortawesome/free-brands-svg-icons'


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
          <img className={styles.img} src='/assets/images/vscode.png' alt="VSCode" />       
          <img className={styles.img} src='/assets/images/html5.png' alt="HTML5" />
          <img className={styles.img} src='/assets/images/css3.png' alt="CSS3" /> 
          <img className={styles.img} src='/assets/images/sass.png' alt="SASS" />
          <img className={styles.img} src='/assets/images/javascript.png' alt="JavaScript" />
          <img className={styles.img} src='/assets/images/react.png' alt="React" />
          <img className={styles.img} src='/assets/images/figma.png' alt="Figma" />
          <img className={styles.img} src='/assets/images/github.png' alt="GitHub" />
          {/* <img className={styles.img} src='/assets/images/git-icon.png'alt="Git" />                    */}
        </Pill>
          <h4>Exposure to...</h4>
        <Pill>
          <img className={styles.imgx} src='/assets/images/nodejs.png' alt="Nodejs"/>
          <img className={styles.imgx} src='/assets/images/firebase.png' alt="Firebase"/>
          <img className={styles.imgx} src='/assets/images/typescript.png' alt="TypeScript"/>
          <img className={styles.imgx} src='/assets/images/angular.png' alt="Angular"/>
        </Pill>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ProfileLink>
          <ul>
            <li>
            <a href="https://github.com/MichaelF79">GitHub</a>
            </li>
            <br></br>
            <li>
              <a href="https://www.linkedin.com/in/mjmferreira/">LinkedIn</a>
            </li>                          
          </ul>
        </ProfileLink>

      </div>
    </Layout>
  );
};

export default Me;