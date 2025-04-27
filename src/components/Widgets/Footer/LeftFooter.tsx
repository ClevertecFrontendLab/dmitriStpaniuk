import { Flex, Image, Text } from '@chakra-ui/react';

import exitIcon from '~/assets/svg/left-icon.svg';
export const LeftFooter = () => (
    <Flex
        flexDirection='column'
        alignItems='flex-start'
        gap='15px'
        as='footer'
        fontFamily='heading'
        fontSize='12px'
        p={['10px 10px 0px 10px', '10px 0px 0px 10px', '10px 10px 0px 10px', '0 24px', '0 24px']}
        w='100%'
        data-test-id='footer'
    >
        <Text color='blackAlpha.400' fontWeight='500' textAlign='left' w='100%'>
            Версия программы 03.25
        </Text>
        <Text color='blackAlpha.700' fontWeight='400' textAlign='left' w='100%' lineHeight='10px'>
            Все права защищены, ученический файл,
            <br /> ©Клевер Технолоджи, 2025
        </Text>
        <Flex alignItems='center' gap='6px' cursor='pointer'>
            <Image src={exitIcon} alt='Выйти' />
            <Text fontWeight='600'>Выйти</Text>
        </Flex>
    </Flex>
);
