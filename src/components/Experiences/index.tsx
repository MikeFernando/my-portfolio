import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';

import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="2 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year={2020}
          title="Primeiros passos na Web"
          description="Primeiro contato com Linguagem de Marcação de Hiper Textos (HTML) e estilos em cascatas (CSS) onde realizei
          a construção de sites estáticos, dashboards, e catálogos..."
        />
        <ExperienceItem
          year={2021}
          title="Dev Front-end"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica."
        />
      </section>
    </Container>
  );
}
