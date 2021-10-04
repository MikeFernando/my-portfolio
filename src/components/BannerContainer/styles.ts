import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 27rem;
  background: url(${props => props.imgUrl}) no-repeat top;
  background-size: cover;
  position: relative;
  padding: 3rem 5rem;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  color: white;

  > section {
    z-index: 2;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
    }

    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 2rem;
      font-weight: 300;
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

  @media (max-width: 700px) {
    padding: 2rem 2.5rem;
    height: 20rem;

    > section {
      h1 {
        font-size: 1.8rem;
      }

      h2 {
        font-size: 1.3rem;
      }
    }
  }
`;
