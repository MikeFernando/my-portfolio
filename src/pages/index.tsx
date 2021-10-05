// ROOT IMPORTS
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Prismic from '@prismicio/client';
import Head from 'next/head';
import AOS from 'aos';

// COMPONENTES
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { ProjectsHome } from '../components/ProjectsHome';
import { Conhecimentos } from '../components/Conhecimentos';
import { FormContato } from '../components/FormContato';
import { Footer } from '../components/Footer';

// TYPES
import { IProjects } from '../@types/IProjects';

// SERVICES
import getPrismicClient from '../services/prismic';

// STYLES
import { HomeContainer } from '../styles/HomeContainer';
import 'aos/dist/aos.css';

interface HomeProps {
  projects: IProjects[];
}

export default function Home({ projects }: HomeProps) {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | My Portfolio</title>
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <ProjectsHome projects={projects} />
        <Conhecimentos />
        <FormContato />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.predicates.at('document.type', 'projeto')],
    { orderings: '[document.first_publication_date desc]' }
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
