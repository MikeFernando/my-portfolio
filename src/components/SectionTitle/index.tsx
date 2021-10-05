import { ReactNode } from 'react';
import { Container } from './styles';

interface Props {
  title: string | ReactNode;
  description?: string | ReactNode;
}

export function SectionTitle({ title, description }: Props) {
  return (
    <Container data-aos="fade-right">
      <h1>#{title}</h1>
      {description && <h2>{description}</h2>}
    </Container>
  );
}
