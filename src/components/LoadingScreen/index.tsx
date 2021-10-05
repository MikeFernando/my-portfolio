import { Container, SpinnerContainer } from './styles';

export function LoadingScreen() {
  return (
    <Container>
      <SpinnerContainer>
        <div className="spinner">
          <div className="double-bounce1" />
          <div className="double-bounce2" />
        </div>
      </SpinnerContainer>
    </Container>
  );
}
