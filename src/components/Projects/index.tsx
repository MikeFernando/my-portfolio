import Link from 'next/link';

import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        <ProjectItem
          img="https://user-images.githubusercontent.com/71772559/113537236-741f7980-95ae-11eb-8e58-dc35845007c5.png"
          title="Projeto 01"
          type="WordTrip"
          slug="Projeto"
        />
        <ProjectItem
          img="https://user-images.githubusercontent.com/71772559/113496123-d0aa6800-94cc-11eb-90dd-800b72502003.png"
          title="Projeto 02"
          type="Dashgo"
          slug="Projeto"
        />
        <ProjectItem
          img="https://github.com/MikeFernando/GoBarberWeb/raw/main/github/gobarber-web.gif"
          title="Projeto 03"
          type="GoBarber"
          slug="Projeto"
        />
      </section>

      <button type="button">
        <Link href="/projects">
          <a>ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
