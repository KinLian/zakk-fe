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
    }}
  >
    <Navbar />
    {children}
  </Box>
);
