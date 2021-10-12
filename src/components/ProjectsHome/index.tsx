import Link from 'next/link';

import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

import { IProjects } from '../../@types/IProjects';

interface ProjectsHomeProps {
  projects: IProjects[];
}

export function ProjectsHome({ projects }: ProjectsHomeProps) {
  return (
    <Container>
      <SectionTitle title="Últimos projetos" />

      <section>
        {projects.slice(0, 3).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>

      <button type="button">
        <Link href="/projects">
          <a>ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
