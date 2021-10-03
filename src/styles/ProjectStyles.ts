import styled from 'styled-components';

export const ProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  > main {
    width: 100%;
    margin-top: 5rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;

    // ============================== RESPONSIVE
    @media (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 550px) {
      grid-template-columns: 1fr;
    }
  }
`;
