import { useRouter } from 'next/router';
import Link from 'next/link';

import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export function NavLink({ title, path, includes = false }: Props) {
  const router = useRouter();

  function verifyIfActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfActive();

  return (
    <NavLinkContainer isActive={isActive}>
      <Link href={path} prefetch>
        <a>{title}</a>
      </Link>
    </NavLinkContainer>
  );
}
