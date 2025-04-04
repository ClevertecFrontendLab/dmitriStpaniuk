import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Image, useBreakpointValue } from '@chakra-ui/react';

import logo from '~/assets/images/logo.png';
import logoMobile from '~/assets/images/logoSm.png';
import { Breadcrumbs } from '~/components/Dummies/Breadcrumb/Breadcrumbs';
import { ProfileNotification } from '~/components/Dummies/ProfileNotification/ProfileNotification';

import { CardAvatar } from '../../Dummies/CardAvatar/CardAvatar';

export const Header = () => {
    const headerHeight = useBreakpointValue({
        base: '64px',
        sm: '64px',
        md: '64px',
        lg: '80px',
        xl: '80px',
        '2xl': '80px',
    });
    const padLeft = useBreakpointValue({
        base: '16px',
        sm: '16px',
        md: '20px',
        lg: '16px',
        xl: '16px',
        '2xl': '16px',
    });
    const padRight = useBreakpointValue({
        base: '32px',
        sm: '32px',
        md: '32px',
        lg: '80px',
        xl: '80px',
    });
    const logoYeedaa = useBreakpointValue({
        base: logoMobile,
        sm: logoMobile,
        md: logo,
        lg: logo,
        xl: logo,
        '2xl': logo,
    });
    const showMobileMenu = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });

    console.log('Header height:', headerHeight);

    return (
        <Box
            as='header'
            data-test-id='header'
            bg='customLime.50'
            h={headerHeight}
            w='100%'
            // position='sticky'
            // top={0}
            // zIndex='sticky'
            pr={padRight}
        >
            <Flex h='100%' alignItems='center' justifyContent='space-between' pl={padLeft}>
                <Flex alignItems='center' gap='128px'>
                    <Image src={logoYeedaa} alt='logo' />
                    {showMobileMenu ? <></> : <Breadcrumbs />}
                </Flex>
                {showMobileMenu ? (
                    <Flex>
                        <ProfileNotification />
                        <Box ml={['32px', '32px', '45px']}>
                            <HamburgerIcon />
                        </Box>
                    </Flex>
                ) : (
                    <CardAvatar />
                )}
            </Flex>
        </Box>
    );
};
