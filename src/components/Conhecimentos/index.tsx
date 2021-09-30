import { SiJavascript, SiTypescript } from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { GrReactjs } from 'react-icons/gr';

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
        <ConhecimentoItem title="TYPESCRIPT" icon={<SiTypescript />} />
        <ConhecimentoItem title="REACT.JS" icon={<GrReactjs />} />
        <ConhecimentoItem title="NEXT.JS" icon={<IoLogoVercel />} />
      </section>
    </Container>
  );
}
