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
                {showMenu && <Menu onClose={() => {}} />}
                <Flex
                    as='main'
                    maxW='100vw'
                    flex='1'
                    h={[
                        'calc(100vh - 150px)',
                        'calc(100vh - 150px)',
                        'calc(100vh - 150px)',
                        'calc(100vh - 81px)',
                        'calc(100vh - 80px)',
                    ]}
                    overflowY='scroll'
                    overflowX='scroll'
                    pl={['0', '16px', '20px', '24px']}
                    pr={['0', '16px', '20px', '10px', '10px']}
                    sx={{
                        '&::-webkit-scrollbar': {
                            display: 'none',
                        },
                        msOverflowStyle: 'none',
                        scrollbarWidth: 'none',
                    }}
                >
                    <Outlet />
                </Flex>
                {showMenu && <Asaid />}
            </Flex>
            {showFooter && <BottomFooter />}
        </Flex>
    );
};
