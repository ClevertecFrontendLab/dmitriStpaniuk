import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router';

import { Asaid } from '../Widgets/Asaid/Asaid';
import { BottomFooter } from '../Widgets/Footer/BottomFooter';
import { Header } from '../Widgets/Header/Header';
import { Menu } from '../Widgets/Menu/Menu';

export const MainLayout = () => {
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
                <Flex
                    as='main'
                    flex='1'
                    pl={['0', '0', '20px', '24px']}
                    pr={['0', '0', '20px', '0', '0']}
                >
                    <Outlet />
                </Flex>
                {showMenu && <Asaid />}
            </Flex>
            {showFooter && <BottomFooter />}
        </Flex>
    );
};
