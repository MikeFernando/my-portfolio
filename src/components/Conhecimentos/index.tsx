import { AiFillHtml5 } from 'react-icons/ai';
import { GrReactjs } from 'react-icons/gr';
import { SiJavascript } from 'react-icons/si';
import { FaCss3Alt } from 'react-icons/fa';

import { SectionTitle } from '../SectionTitle';
import { ConhecimentoItem } from './ConhecimentoItem';

import { Container } from './styles';

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />

      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
        <ConhecimentoItem title="JAVASCRIPT" icon={<SiJavascript />} />
        <ConhecimentoItem title="REACT" icon={<GrReactjs />} />
      </section>
    </Container>
  );
}
