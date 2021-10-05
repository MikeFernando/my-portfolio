/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeInfo } from './styles';

import picture from '../../assets/avatar-terno.png';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img data-aos="fade-up" src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Mike</h2>
        </TextContainer>

        <InfosContainer>
          <CodeInfo data-aos="flip-left">
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Mike,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Fernando,</span>
            </div>
            <div>
              Idade: <span className="blue">26 anos</span>
            </div>
            {'\u007D'}
          </CodeInfo>

          <CodeInfo data-aos="flip-right">
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Cargo: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Empresa: <span className="blue">MEI,</span>
            </div>
            <div>
              Status: <span className="blue">Disponível</span>
            </div>
            {'\u007D'}
          </CodeInfo>
        </InfosContainer>
      </div>
    </Container>
  );
}
