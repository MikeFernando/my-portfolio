import { AiOutlineRightCircle } from 'react-icons/ai';
import Link from 'next/link';

import { ProjectContainer } from './styles';

interface Props {
  img: string;
  title: string;
  type: string;
  slug: string;
}

export function ProjectItem({ img, title, type, slug }: Props) {
  return (
    <ProjectContainer imgUrl={img} data-aos="fade-up">
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>#{title}</h1>
          <h2>- {type}</h2>
        </div>
      </section>

      <button type="button">
        <Link href={`/projects/${slug}`}>
          <a>
            Ver mais <AiOutlineRightCircle />
          </a>
        </Link>
      </button>
    </ProjectContainer>
  );
}
