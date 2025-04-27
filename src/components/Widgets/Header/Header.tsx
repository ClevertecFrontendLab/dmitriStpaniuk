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
import { Menu } from '../Menu/Menu';

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
            bg={isOpen ? 'white' : 'customLime.50'}
            h={['64px', '64px', '64px', '80px', '80px', '80px']}
            w='100%'
            // position='sticky'
            // top={0}
            // zIndex={9999}
            pr={['32px', '32px', '32px', '80px', '80px', '80px']}
        >
            <Flex
                h='100%'
                alignItems='center'
                justifyContent='space-between'
                pl={['16px', '16px', '16px', '20px', '16px', '16px']}
                position='relative'
                // zIndex={9999}
            >
                <Flex alignItems='center' gap='128px'>
                    <Image src={logoYeedaa} alt='logo' />
                    {!showMobileMenu && <Breadcrumbs onClose={onClose} />}
                </Flex>
                {showMobileMenu ? (
                    <Flex>
                        {!isOpen && <ProfileNotification />}
                        <IconButton
                            ml={['32px', '32px', '45px']}
                            aria-label='menu'
                            variant='unstyled'
                            _focus={{ boxShadow: 'none' }}
                            _active={{ bg: 'transparent' }}
                            _hover={{ bg: 'transparent' }}
                            icon={
                                isOpen ? (
                                    <CloseIcon
                                        data-test-id='close-icon'
                                        w='14px'
                                        h='14px'
                                        color='black'
                                    />
                                ) : (
                                    <HamburgerIcon
                                        data-test-id='hamburger-icon'
                                        w='24px'
                                        h='24px'
                                        color='black'
                                    />
                                )
                            }
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
                                top='70px'
                                backgroundColor='rgba(0, 0, 0, 0.16)'
                                filter='blur(4px)'
                            />
                            <DrawerContent
                                minWidth='340px'
                                maxHeight='calc(100vh - 130px)'
                                data-test-id='nav'
                                borderBottomRadius='8px'
                                marginRight='8px'
                                marginTop='64px'
                                boxShadow='none'
                                sx={{
                                    '.chakra-modal__body': {
                                        padding: '10px 16px 10px 10px',
                                    },
                                }}
                            >
                                <DrawerHeader borderBottomWidth='1px'>
                                    <Breadcrumbs onClose={onClose} />
                                </DrawerHeader>
                                <DrawerBody>
                                    <Menu onClose={onClose} />
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
