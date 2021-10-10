import { useState, FormEvent } from 'react';
import toast from 'react-hot-toast';

import sendContactMail from '../../services/sendContactMail';
import theme from '../../styles/theme';

import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [loading, setLoading] = useState(false);

  async function handleSubmitForm(event: FormEvent) {
    event.preventDefault();

    if (!name || !email || !message) {
      toast('Preencha todos os campos para enviar sua mensagem', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    try {
      setLoading(true);

      await sendContactMail(name, email, message);
      setName('');
      setEmail('');
      setMessage('');

      toast('E-mail foi enviado com sucesso!', {
        style: {
          background: theme.success,
          color: '#fff'
        }
      });
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem, tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmitForm}>
      <Input
        type="text"
        placeholder="Nome..."
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        type="email"
        placeholder="E-mail..."
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={message}
        onChange={({ target }) => setMessage(target.value)}
      />

      <button disabled={loading} type="submit">
        ENVIAR
      </button>
    </FormContainer>
  );
}
