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
          title="Desbravando a Web"
          description="Iniciei com HTML e CSS criando sites estáticos, logo em seguida dei meus 
          primeiros passos em lógica de programação, aprendendo algoritimos em JavaScript ES6, manipulação
          da DOM, etc...
          "
        />
        <ExperienceItem
          year={2020}
          title="Tecnologias avançadas"
          description="Com os conhecimentos obtidos estava apto a conhecer frameworks e linguagens que as empresas
          usam em seus projetos, e assim iniciei meus estudos em ReactJS , React-Native, Node.JS."
        />
        <ExperienceItem
          year={2021}
          title="Finalmente Desenvolvedor"
          description="Capaz de compreender o fluxo completo que acontece por debaixo dos panos entre servidor e interfaces.
          Atualmente mais focado em Front-End. 
          "
        />
      </section>
    </Container>
  );
}
