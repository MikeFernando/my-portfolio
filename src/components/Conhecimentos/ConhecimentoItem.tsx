import { ReactNode } from 'react';

import { ConhecimentoContainer } from './styles';

interface Props {
  title: string;
  icon: ReactNode;
}

export function ConhecimentoItem({ title, icon }: Props) {
  return (
    <ConhecimentoContainer data-aos="fade-up">
      <p>{title}</p>
      {icon}
    </ConhecimentoContainer>
  );
}
