import { Header } from '../../components/Header';
import { ProjetoItem } from '../../components/ProjetoItem';
import { ProjectsContainer } from '../../styles/ProjectStyles';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjetoItem
          title="Projeto 01"
          type="World trip"
          imgUrl="https://imgur.com/vgh3YfF.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 02"
          type="Dashgo"
          imgUrl="https://user-images.githubusercontent.com/71772559/113496123-d0aa6800-94cc-11eb-90dd-800b72502003.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 03"
          type="Ignews"
          imgUrl="https://imgur.com/BQlRbWC.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 03"
          type="Ignews"
          imgUrl="https://github.com/MikeFernando/GoBarberWeb/raw/main/github/gobarber-web.gif"
          slug="teste"
        />
      </main>
    </ProjectsContainer>
  );
}
