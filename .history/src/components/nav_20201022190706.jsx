/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

const Nav = () => (
  <header
    sx={{
      height: '60px',
      width: '100vw',
      bg: 'primary',
      borderBottom: '1px solid',
      borderColor: 'primary',
    }}
  >
    <nav
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        variant: 'containers.page',
        height: '100%',
      }}
    >
      <Link href='/'>
        <a sx={{ fontWeight: 'bold', fontSize: 4, cursor: 'pointer' }}>
          Ranting randy
        </a>
      </Link>

      <Link href='/rant-board'>
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>Rants</a>
      </Link>
      <Link href='/rant'>
        <a sx={{ color: 'text', fontSize: 3, cursor: 'pointer' }}>Rants</a>
      </Link>
    </nav>
  </header>
);

export default Nav;
