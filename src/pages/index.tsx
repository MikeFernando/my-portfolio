import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Experiences } from '../components/Experiences';
import { Projects } from '../components/Projects';
import { Conhecimentos } from '../components/Conhecimentos';
import { FormContato } from '../components/FormContato';
import { Footer } from '../components/Footer';

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
        <FormContato />
        <Footer />
      </main>
    </HomeContainer>
  );
}
