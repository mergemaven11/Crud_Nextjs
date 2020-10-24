// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
import mockRants from '../../src/components/data/data'

export default () => {
  return (
    <div sx={{  variant: 'containers.page' }}>
      <h1>Rant board</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {mockRants.map((rant) => (
          <div sx={{ width: '33%', p: 2 }}>
            <Link key={rant.id} href='/rant-board/[id]' as={`/rant-board/${rant.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                <h2>{rant.name}</h2>
                  <p>Rant - {rant.description}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};