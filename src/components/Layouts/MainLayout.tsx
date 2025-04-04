import { Box, Flex, useBreakpointValue } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

import { BottomFooter } from '../Widgets/Footer/BottomFooter';
import { Header } from '../Widgets/Header/Header';
import { Menu } from '../Widgets/Menu/Menu';
interface MainLayoutProps {
    children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
    const showFooter = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });

    const showMenu = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
        '2xl': true,
    });

    return (
        <Flex direction='column' minH='100vh' w='100%'>
            <Header />
            <Flex flex='1' position='relative'>
                {showMenu && <Menu />}
                <Box
                    as='main'
                    flex='1'
                    p={{
                        base: '16px',
                        md: '24px',
                        lg: '32px',
                    }}
                    ml={{
                        base: '0',
                        lg: '256px', // ширина меню
                    }}
                >
                    {children}
                </Box>
            </Flex>
            {showFooter && <BottomFooter />}
        </Flex>
    );
};
