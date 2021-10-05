// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { SiJavascript, SiTypescript, SiNextDotJs } from 'react-icons/si';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { GrReactjs, GrNode } from 'react-icons/gr';

import { SectionTitle } from '../SectionTitle';
import { ConhecimentoItem } from './ConhecimentoItem';

import { Container } from './styles';

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />

      <section>
        <ConhecimentoItem title="HTML" icon={<AiFillHtml5 color="#DD6B20" />} />
        <ConhecimentoItem title="CSS" icon={<FaCss3Alt color="#2B6CB0" />} />
        <ConhecimentoItem
          title="JAVASCRIPT"
          icon={<SiJavascript color="#D69E2E" />}
        />
        <ConhecimentoItem
          title="TYPESCRIPT"
          icon={<SiTypescript color="#0047ab" />}
        />
        <ConhecimentoItem
          title="REACT.JS"
          icon={<GrReactjs color="#00B5D8" />}
        />
        <ConhecimentoItem
          title="REACT.NATIVE"
          icon={<GrReactjs color="#0047ab" />}
        />
        <ConhecimentoItem title="NODE.JS" icon={<GrNode color="#38A169" />} />
        <ConhecimentoItem
          title="NEXT.JS"
          icon={<SiNextDotJs color="#1a1a1a" />}
        />
      </section>
    </Container>
  );
}
