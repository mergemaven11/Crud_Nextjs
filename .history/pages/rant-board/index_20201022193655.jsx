// pages/notes/index.jsx
/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';.
import Rants from '../../src/components/data/data'

export default ({ Rants }) => {
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
        {notes.map((note) => (
          <div sx={{ width: '33%', p: 2 }}>
            <Link key={note.id} href='/notes/[id]' as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};