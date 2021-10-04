import { Header } from '../../components/Header';
import { ProjetoItem } from '../../components/ProjetoItem';
import { ProjectsContainer } from '../../styles/ProjectsStyles';

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
          imgUrl="https://imgur.com/kAgYYjp.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 04"
          type="GoBarber"
          imgUrl="https://imgur.com/e8XJWup.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 05"
          type="Dev Finance"
          imgUrl="https://imgur.com/RvbKOAY.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 06"
          type="Spacetraveling"
          imgUrl="https://imgur.com/ENxojoz.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 07"
          type="dt money"
          imgUrl="https://imgur.com/byeRsmH.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 08"
          type="Origin six"
          imgUrl="https://imgur.com/jtbblCT.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 09"
          type="Github explorer"
          imgUrl="https://imgur.com/RIEIPjJ.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 10"
          type="Spider man"
          imgUrl="https://imgur.com/RcLHuik.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 11"
          type="Move.it"
          imgUrl="https://imgur.com/7yzH16m.png"
          slug="teste"
        />
        <ProjetoItem
          title="Projeto 12"
          type="Happy Web"
          imgUrl="https://imgur.com/VA0Lv3W.png"
          slug="teste"
        />
      </main>
    </ProjectsContainer>
  );
}
