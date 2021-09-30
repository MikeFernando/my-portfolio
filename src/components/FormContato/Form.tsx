import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  return (
    <FormContainer>
      <Input type="text" placeholder="Nome..." required />
      <Input type="email" placeholder="E-mail..." required />
      <TextArea placeholder="Mensagem" required />

      <button type="submit">ENVIAR</button>
    </FormContainer>
  );
}
