import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Pill } from '../../styles';
import { ProjectItem, ProjectTitle, ProjectImage,ProjectLinks, SkillContainer } from './styles';

const Projects = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Projects</SectionTitle>
        <ul>
          {user.projects.map((project, i) => (
            <ProjectItem key={i}>
            <ProjectImage>
              <div>
                <img className="image" src={project.images[0].resolutions.thumbnail.url} alt={project.name} />
              </div> 
            </ProjectImage>
              <ProjectTitle>{project.displayName}</ProjectTitle>
              <p>{project.description}</p>
              <ProjectLinks>
                <div>
                  <ul>
                    <li>
                      <a className="weblink" href={project.website}>Live Demo</a>
                    </li>
                    <li>
                      <a  className="gitlink" href={project.githubUrl}>Github</a>
                    </li>
                  </ul>
                </div>
              </ProjectLinks>
              <SkillContainer>
                {[...project.languages, ...project.libraries].map((item, j) => (
                  <Pill key={j}>{item}</Pill>
                ))}
              </SkillContainer>
            </ProjectItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Projects;