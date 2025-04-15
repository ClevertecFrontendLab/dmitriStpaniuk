import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
    IconButton,
    Image,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';

import logo from '~/assets/images/logo.png';
import logoMobile from '~/assets/images/logoSm.png';
import { Breadcrumbs } from '~/components/Dummies/Breadcrumbs/Breadcrumbs';
import { ProfileNotification } from '~/components/Dummies/ProfileNotification/ProfileNotification';

import { CardAvatar } from '../../Dummies/CardAvatar/CardAvatar';

export const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

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

    return (
        <Box
            as='header'
            data-test-id='header'
            bg='customLime.50'
            h={['64px', '64px', '64px', '80px', '80px', '80px']}
            w='100%'
            position='sticky'
            top={0}
            zIndex='sticky'
            pr={['32px', '32px', '32px', '80px', '80px', '80px']}
        >
            <Flex
                h='100%'
                alignItems='center'
                justifyContent='space-between'
                pl={['16px', '16px', '16px', '20px', '16px', '16px']}
            >
                <Flex alignItems='center' gap='128px'>
                    <Image src={logoYeedaa} alt='logo' />
                    {!showMobileMenu && <Breadcrumbs />}
                </Flex>
                {showMobileMenu ? (
                    <Flex>
                        <ProfileNotification />
                        <IconButton
                            ml={['32px', '32px', '45px']}
                            aria-label='menu'
                            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                            onClick={isOpen ? onClose : onOpen}
                        />
                        <Drawer
                            placement='right'
                            onClose={onClose}
                            isOpen={isOpen}
                            blockScrollOnMount={false}
                            preserveScrollBarGap={false}
                        >
                            <DrawerOverlay
                                position='fixed'
                                top='64px'
                                backgroundColor='rgba(0, 0, 0, 0.16)'
                                filter='blur(4px)'
                            />
                            <DrawerContent
                                height='auto'
                                maxHeight='300px'
                                borderTopLeftRadius='8px'
                                borderBottomLeftRadius='8px'
                                marginTop='64px'
                            >
                                <DrawerHeader borderBottomWidth='1px'>Menu</DrawerHeader>
                                <DrawerBody>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                    <p>Some contents...</p>
                                </DrawerBody>
                            </DrawerContent>
                        </Drawer>
                    </Flex>
                ) : (
                    <CardAvatar />
                )}
            </Flex>
        </Box>
    );
};
