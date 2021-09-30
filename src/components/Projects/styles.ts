import { darken } from 'polished';
import styled from 'styled-components';

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  > button {
    background: ${({ theme }) => theme.primary};
    border: none;
    border-radius: 0.5rem;
    padding: 0.8rem 3rem;

    transition: 0.5s;

    &:hover {
      background: ${({ theme }) => darken(0.1, theme.primary)};
    }

    a {
      font-size: 1.5rem;
      font-weight: 300;
      color: #fff;
    }
  }

  // ============================== RESPONSIVE
  @media (max-width: 1000px) {
    gap: 2rem;
  }

  @media (max-width: 500px) {
    > button {
      padding: 1rem;

      a {
        font-size: 1rem;
      }
    }
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.75;

      transition: 0.5s;
    }

    > div.text {
      position: absolute;
      top: 3rem;
      right: -10rem;
      width: fit-content;

      transition: 0.5s;

      h1 {
        color: ${({ theme }) => theme.primary};
        font-size: 2.5rem;
        text-shadow: -4px 5px 22px #11172b;
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 2rem;
        font-weight: 300;
        text-shadow: -4px 5px 22px #11172b;
      }
    }
  }

  > button {
    height: 4rem;
    margin: 0 2rem 2.5rem 2rem;
    background: none;
    border: none;

    a {
      color: #fff;
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5;
    }
  }

  // ============================== PSEUDO ELEMENTS
  &:hover {
    > section {
      > div.text {
        right: -12rem;
      }

      > div.overlay {
        opacity: 0.4;
      }
    }

    > button a {
      color: ${({ theme }) => theme.primary};
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    > button {
      margin: 0 2rem 3rem 2rem;
    }
    > section > div.text {
      text-align: right;
      right: 0;
      left: -10rem;
    }

    &:hover {
      > section > div.text {
        left: -12rem;
      }
    }
  }

  // ============================== RESPONSIVE
  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;

      > div.text {
        left: 1rem;
        top: 1rem;

        h1 {
          font-size: 1.8rem;
        }

        h2 {
          font-size: 1.2rem;
        }
      }
    }

    > button a {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
      font-size: 1.5rem;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        > div.text {
          left: 1rem;
          top: 1rem;
          text-align: left;
        }
      }

      > button a {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
        font-size: 1.5rem;
      }

      &:hover {
        > section > div.text {
          left: 1rem;
        }
      }
    }
  }

  @media (max-width: 720px) {
    height: 17rem;

    > button {
      height: auto;
      font-size: 1rem;
      gap: 0.8rem;
    }

    &:nth-child() {
      > button a {
        height: auto;
        font-size: 1rem;
        gap: 0.8rem;
      }
    }
  }

  @media (max-width: 450px) {
    > section > div.text {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
    }

    > button {
      height: auto;

      a {
        font-size: 1rem;
        gap: 0.8rem;
      }
    }

    &:nth-child(even) {
      > button {
        height: auto;

        a {
          font-size: 1rem;
          gap: 0.8rem;
        }
      }
    }
  }
`;
