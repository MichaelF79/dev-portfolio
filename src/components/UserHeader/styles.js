import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  margin-top: 1rem;
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 150px;
  margin-right: 2.5rem;
  border-radius: 50%;
`;

// export const ViewResumeLink = styled.a`
//   display: flex;
//   text-decoration: none;
//   padding: 0.75rem 1.5rem;
//   border-radius: 15px;
//   font-weight: bold;
//   align-items: center;
//   margin-top: 3rem;
//   border: 2px solid #0f62fe;
//   background-color: #0f62fe;
//   transition: background-color 250ms ease;
//   &:hover {
//     background-color: #004cdb;
//   }
//   svg {
//     fill: white;
//     margin-left: 8px;
//   }
// `;
