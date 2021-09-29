import { Conhecimentos } from '../components/Conhecimentos';
import { Experiences } from '../components/Experiences';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Projects } from '../components/Projects';

import { HomeContainer } from '../styles/HomeContainer';

export default function Home() {
  return (
    <HomeContainer>
      <Header />

      <main className="container">
        <HomeHero />
        <Experiences />
        <Projects />
        <Conhecimentos />
      </main>
    </HomeContainer>
  );
}
