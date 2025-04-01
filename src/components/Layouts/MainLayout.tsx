import { Container } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { Header } from '../Widgets/Header/Header';

interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
    <Container
        p={0}
        maxW={{
            base: '100%',
            sm: '100%',
            md: '100%',
            lg: '100%',
            xl: '100%',
        }}
    >
        <Header />
        {children}
    </Container>
);
