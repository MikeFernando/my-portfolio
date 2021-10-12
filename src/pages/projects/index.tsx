// ROUTES IMPORTS
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import { GetStaticProps } from 'next';
import AOS from 'aos';
import Head from 'next/head';

// SERVICES
import getPrismicClient from '../../services/prismic';
// COMPONENTS
import { Header } from '../../components/Header';
import { ProjetoItem } from '../../components/ProjetoItem';

// TYPES
import { IProjects } from '../../@types/IProjects';

// CSS
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import 'aos/dist/aos.css';

interface ProjectsProps {
  projects: IProjects[];
}

export default function Projects({ projects }: ProjectsProps) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />

      <main className="container" data-aos="zoom-in-down">
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
