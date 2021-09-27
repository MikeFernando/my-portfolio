import { SectionTitle } from '../SectionTitle';
import { ExperienceItem } from './ExperienceItem';

import { Container } from './styles';

export function Experiences() {
  return (
    <Container>
      <SectionTitle title="3 anos" description="de experiência" />

      <section>
        <ExperienceItem
          year={2019}
          title="Dev Front-end"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica."
        />
        <ExperienceItem
          year={2020}
          title="Dev Front-end"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica."
        />
        <ExperienceItem
          year={2021}
          title="Dev Front-end"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica."
        />
        <ExperienceItem
          year={2022}
          title="Dev Front-end"
          description="Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica."
        />
      </section>
    </Container>
  );
}
