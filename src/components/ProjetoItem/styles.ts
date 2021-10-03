import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  > a {
    position: relative;
    width: 100%;
    height: 10rem;
    padding: 1.5rem;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;

    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};

    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;

    cursor: pointer;
    overflow: hidden;
    transition: 0.5s;

    > section {
      z-index: 2;

      h1 {
        color: ${({ theme }) => theme.secondary};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.primary};
        font-weight: 300;
        font-size: 1rem;
      }
    }

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      left: 0;
      bottom: 0;
      opacity: 0.6;

      transition: 0.5s;
    }

    // ============================== PSEUDO ELEMENTS
    &:hover {
      border-color: ${({ theme }) => theme.primary};

      h1 {
        color: ${({ theme }) => theme.primary};
      }

      h2 {
        color: ${({ theme }) => theme.secondary};
      }

      div.overlay {
        opacity: 0.2;
      }
    }
  }
`;
