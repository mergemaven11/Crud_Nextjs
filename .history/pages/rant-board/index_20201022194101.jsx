// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';
// import mockRants from '../../src/components/data/data'

const mockRants = [
    {
      id: 1,
      name: 'Tobias',
      description: 'Today I fell off the second flight of stairs and my crush laughed',
    },
    {
      id: 2,
      name: 'Aisha',
      description:
        'yesterday my mom kicked me out and I moved in with a billionaire who might kick me out to?',
    },
    {
      id: 3,
      name: 'Sarah ',
      description: 'I got fired yesterday for smashing my computer over my bosses neck!',
    },
  ];

export default () => {
  return (
    <div sx={{ variant: 'containers.page' }}>
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
                  <strong>{rant.description}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};