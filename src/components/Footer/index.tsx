import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          voltar ao topo
        </button>

        <section>
          <AiOutlineTwitter
            onClick={() => handleRedirect('https://twitter.com/MikeraOn')}
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/MikeFernando')}
          />
          <AiOutlineLinkedin
            onClick={() =>
              handleRedirect('https://www.linkedin.com/in/mike-fernando3g/')
            }
          />
        </section>
      </div>
    </Container>
  );
}
