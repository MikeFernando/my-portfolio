import { darken } from 'polished';
import styled from 'styled-components';

export const ProjetoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > main {
    margin-top: 5rem;
    margin-bottom: 5rem;
    width: 100%;
    padding: 0 5rem;

    p {
      color: ${({ theme }) => theme.textLight};
      font-size: 1.5rem;
      font-weight: 300;
      text-align: justify;
    }

    > button {
      background: ${({ theme }) => theme.textHighlight};
      border: none;
      border-radius: 0.5rem;
      padding: 0.8rem 3rem;
      margin-top: 2rem;

      transition: 0.5s;

      &:hover {
        background: ${({ theme }) => darken(0.1, theme.textHighlight)};
      }

      a {
        font-size: 1.5rem;
        font-weight: 300;
        color: #fff;
      }
    }

    // ============================== RESPONSIVE
    @media (max-width: 700px) {
      padding: 0 2.5rem;

      p {
        font-size: 1rem;
      }

      button {
        padding: 0.7rem 2rem;

        a {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
