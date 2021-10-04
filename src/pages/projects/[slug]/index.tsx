import { BannerContainer } from '../../../components/BannerContainer';
import { Header } from '../../../components/Header';

import { ProjetoContainer } from '../../../styles/ProjectDetails';

export default function Projeto() {
  return (
    <ProjetoContainer>
      <Header />
      <BannerContainer
        title="Projeto 13"
        type="Website"
        imgUrl="https://github.com/MikeFernando/GoBarberWeb/raw/main/github/gobarber-web.gif"
      />

      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
          asperiores cumque sint doloremque in modi voluptatem. Amet porro
          excepturi, eveniet quia vero maxime officiis nostrum! Voluptas nulla
          temporibus a culpa. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Soluta asperiores cumque sint doloremque in modi voluptatem.
          Amet porro excepturi, eveniet quia vero maxime officiis nostrum!
          Voluptas nulla temporibus a culpa. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Soluta asperiores cumque sint doloremque
          in modi voluptatem. Amet porro excepturi, eveniet quia vero maxime
          officiis nostrum! Voluptas nulla temporibus a culpa.
        </p>

        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
