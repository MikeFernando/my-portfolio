import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
`;

export const FormContainer = styled.form`
  margin-top: 8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  > button {
    padding: 1rem 2.5rem;
    border: none;
    font-weight: 300;
    color: #fff;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    background: ${({ theme }) => darken(0.1, theme.primary)};
    width: fit-content;

    transition: 0.5s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: ${({ theme }) => darken(0.3, theme.primary)};
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => darken(0.3, theme.primary)};
    }
  }

  // ============================== RESPONSIVE
  @media (max-width: 700px) {
    margin-top: 5rem;
    grid-template-columns: 1fr;
  }

  @media (max-width: 450px) {
    > button {
      padding: 0.8rem 1.4rem;
      font-size: 1rem;
    }
  }
`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  padding: 1.7rem 1.5rem;
  font-size: 1.2rem;
  outline: none;

  transition: 0.5s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 450px) {
    font-size: 1rem;
    padding: 1.4rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background: ${({ theme }) => theme.gradient};
  color: #fff;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 0.5rem;
  padding: 1.7rem 1.5rem;
  font-size: 1.2rem;
  outline: none;
  resize: none;

  grid-column: 1 / 3;

  transition: 0.5s;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 700px) {
    grid-column: 1;
  }

  @media (max-width: 450px) {
    font-size: 1rem;
    padding: 1.4rem;
  }
`;
