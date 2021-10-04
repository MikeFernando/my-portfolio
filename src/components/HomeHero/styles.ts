import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;

  > img {
    width: 40rem;
    flex: 1;
  }

  > div {
    flex: 4;
  }

  // ============================== RESPONSIVE
  @media (max-width: 1450px) {
    > img {
      width: 30rem;
    }
    > div {
      flex: 1;
    }
  }

  @media (max-width: 1000px) {
    > img {
      width: 22rem;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
    font-size: 8rem;
    color: ${({ theme }) => theme.primary};
  }
  h2 {
    font-size: 3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.secondary};
  }

  // ============================== RESPONSIVE
  @media (max-width: 1450px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 3rem;
    }
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeInfo = styled.pre`
  width: 24rem;
  padding: 2rem;

  background: ${({ theme }) => theme.gradient};
  box-shadow: 5px 10px 2px 2px rgba(0, 0, 0, 0.5);
  color: #fff;

  font-family: 'JetBrains mono', monospace;
  font-weight: 300;
  align-self: flex-start;

  transition: 1s;

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }

  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }

  span.purple {
    color: #c38cdd;
  }

  span.blue {
    color: #7ac7e3;
  }

  // ============================== PESEUDO ELEMENTS
  &:last-child {
    align-self: flex-end;
  }

  &:hover {
    filter: brightness(2);
  }

  // ============================== RESPONSIVE
  @media (max-width: 1450px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;
