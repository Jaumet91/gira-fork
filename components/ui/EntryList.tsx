import { List, Paper } from '@mui/material';
import { EntryCard } from './';

export const EntryList = () => {
  return (
    // TODO: aqui haremos drop
    <div>
      <Paper
        sx={{
          height: 'calc(100vh - 180px)',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          padding: '1px 5px',
        }}
      >
        {/* TODO: Cambia si se esta haciando drag o no */}
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  );
};
