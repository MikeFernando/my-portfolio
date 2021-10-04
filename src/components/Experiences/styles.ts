import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  > section {
    width: 100%;
    margin-top: 7rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 8rem;
    border-bottom: 3px solid ${({ theme }) => theme.primary};

    // ============================== RESPONSIVE
    @media (max-width: 1000px) {
      gap: 1rem;
    }

    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
`;

export const ItemContainer = styled.div`
  > div {
    max-width: 30rem;
    background: ${({ theme }) => theme.gradient};
    padding: 1rem;
    padding-top: 2.5rem;
    height: 20rem;
    position: relative;
    box-shadow: 5px 10px 2px 2px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    transition: 0.5s;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
    }

    h2 {
      color: ${({ theme }) => theme.primary};
      font-size: 1.5rem;
      font-weight: 300;
      margin-bottom: 1rem;
    }

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1rem;
      font-weight: 300;
    }

    > button {
      background: none;
      border: none;
      position: absolute;
      bottom: 1rem;
      right: 1rem;

      transition: 0.5s;

      a {
        font-size: 1rem;
        font-weight: 300;
        transition: 0.5s;
        color: ${({ theme }) => theme.secondary};

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }
  }

  // ============================== PSEUDO ELEMENTS
  &:hover > div {
    filter: brightness(1.5);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 4rem;
  }

  // ============================== RESPONSIVE
  @media (max-width: 1000px) {
    > div {
      height: 15rem;
      padding-top: 1.5rem;

      h1 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }

      h2 {
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }
  }

  @media (max-width: 700px) {
    &:nth-child(even) > div {
      margin-top: 0;
    }

    &:hover > div {
      transform: translateY(0);
    }

    > div {
      height: auto;
      padding: 2rem;

      h1 {
        font-size: 2rem;
      }

      h2 {
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
      }
    }
  }
`;

export const ModalContainer = styled.div`
  h1 {
    color: ${({ theme }) => theme.gradient};
  }
`;
