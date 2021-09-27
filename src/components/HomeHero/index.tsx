/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer, InfosContainer, CodeInfo } from './styles';

import picture from '../../assets/pessoa.webp';

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo Mike</h2>
        </TextContainer>

        <InfosContainer>
          <CodeInfo>
            <span className="comment">//Minha apresentação</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Nome: <span className="blue">Mike,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Fernando</span>
            </div>
            {'\u007D'}
          </CodeInfo>

          <CodeInfo>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Cargo: <span className="blue">Dev Front-end,</span>
            </div>
            <div>
              Empresa: <span className="blue">MEI</span>
            </div>
            {'\u007D'}
          </CodeInfo>
        </InfosContainer>
      </div>
    </Container>
  );
}
