import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';

import { Container } from './styles';

export function FormContato() {
  return (
    <Container>
      <SectionTitle
        title="Entrar em contato"
        description={
          <>
            Preencha o formulário abaixo que
            <br />
            irei retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}
