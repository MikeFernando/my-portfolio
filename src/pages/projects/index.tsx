import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';

import getPrismicClient from '../../services/prismic';

import { Header } from '../../components/Header';
import { ProjetoItem } from '../../components/ProjetoItem';

import { IProjects } from '../../@types/IProjects';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

interface ProjectsProps {
  projects: IProjects[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Header />

      <main className="container">
        {projects.map(project => (
          <ProjetoItem
            key={project.slug}
            title={project.title}
            type={project.type}
            imgUrl={project.thumbnail}
            slug={project.slug}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'projeto')],
    { orderings: '[document.last_publication_date desc]' }
  );

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 60 * 60 * 24 // 24 hours
  };
};
