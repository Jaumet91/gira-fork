import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';

import { Box } from '@mui/system';
import { Navabar, Sidebar } from '../ui';

interface LayoutProps extends PropsWithChildren<{}> {
  title?: string;
}

export const Layout: FC<LayoutProps> = ({ title = 'OpenJira', children }) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navabar />
      <Sidebar />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
