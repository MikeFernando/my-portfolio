import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 10rem;
  border-top: 1px solid ${({ theme }) => theme.backgroundLight};
  height: 5rem;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > button {
      background: none;
      border: none;
      color: ${({ theme }) => theme.secondary};
      text-transform: uppercase;
      font-weight: 300;
      font-size: 1.2rem;

      &:hover {
        color: ${({ theme }) => theme.primary};
      }
    }

    > section {
      display: flex;
      align-items: center;
      gap: 1rem;

      svg {
        height: 2rem;
        width: 2rem;
        color: ${({ theme }) => theme.text};
        transition: 0.5s;
        cursor: pointer;

        &:hover {
          color: ${({ theme }) => theme.primary};
        }
      }
    }

    // =========================== RESPONSIVE
    @media (max-width: 450px) {
      > button {
        font-size: 0.9rem;
      }

      > section {
        gap: 0.5rem;

        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      }
    }
  }
`;
