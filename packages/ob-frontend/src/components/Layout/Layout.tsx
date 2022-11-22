import React from 'react';
import Container from '@mui/material/Container';
import { Menu } from '@/components/Navigation/Menu';

export const Layout: React.FC<{
  children?: React.ReactNode;
  centered?: boolean;
}> = ({ children, centered }) => {
  return (
    <Container fixed>
      <Menu />
      <Container
        sx={
          centered
            ? {
                display: 'grid',
                justifyContent: 'center',
                alignContent: 'center',
                height: 'calc(100vh - 106px)',
                padding: '0px !important',
              }
            : { padding: '0px 0px 20px 0px !important' }
        }
      >
        {children}
      </Container>
    </Container>
  );
};
