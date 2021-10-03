import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    margin-top: 8rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8rem;

    border-bottom: 3px solid ${({ theme }) => theme.primary};

    // ============================== RESPONSIVE
    @media (max-width: 1320px) {
      gap: 3rem;
      flex-wrap: wrap;
    }
    @media (max-width: 1000px) {
      gap: 5rem;
    }

    @media (max-width: 700px) {
      gap: 3rem;
      flex-wrap: wrap;
      margin-top: 5rem;
    }
  }
`;

export const ConhecimentoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;

  p {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 1.3rem;
    text-transform: uppercase;
  }

  svg {
    height: 6.5rem;
    width: 6.5rem;
    transition: 0.3s;
    margin-bottom: 7rem;
  }

  // ============================== PESEUDO ELEMENTS
  &:hover {
    svg {
      color: ${({ theme }) => theme.primary};
      transform: scale(0.77);
    }
  }

  // ============================== RESPONSIVE
  @media (max-width: 1000px) {
    p {
      font-size: 1rem;
    }

    svg {
      height: 5rem;
      width: 5rem;
    }
  }
`;
