import React from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        <Image src={user.basics.picture} />
        <div className="info">
          <h1>{user.basics.name}</h1>
          <h3>{user.basics.label}</h3>
          <h4>{user.basics.region}</h4>
        </div>
      </Header>
      {/* <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View CV</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div> */}
    </HeaderContainer>
  );
};

export default UserHeader;
