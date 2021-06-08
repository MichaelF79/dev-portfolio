import styled from 'styled-components';
import { blue } from '@carbon/colors';
/*import { white } from '@carbon/colors';*/

export const SectionTitle = styled.h3`
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

export const Paragraph = styled.p`
  white-space: pre-wrap;
`;

export const Pill = styled.span`
  display: inline-block;
  margin-right: 0.75rem;
  margin-bottom: 0.75rem;
  margin-top: 0.75rem;
  padding: 0.5rem;
  background-color: ${blue[10]};
  color: #000000;
  font-weight: bold;
  border-radius: 15px; 
`;