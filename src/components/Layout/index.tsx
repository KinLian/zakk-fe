import { FC, ReactNode } from 'react';
import { Box } from '../Box';
import { Navbar } from './Navbar';

type LayoutProps = {
  children?: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => (
  <Box
    css={{
      maxW: '100%',
      minHeight: '100vh',
    }}
  >
    <Navbar />
    {children}
  </Box>
);
