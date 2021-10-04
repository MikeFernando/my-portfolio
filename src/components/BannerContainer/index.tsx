import { Container } from './styles';

interface BannerContainerProps {
  title: string;
  type: string;
  imgUrl: string;
}

export function BannerContainer({ title, type, imgUrl }: BannerContainerProps) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
    </Container>
  );
}
