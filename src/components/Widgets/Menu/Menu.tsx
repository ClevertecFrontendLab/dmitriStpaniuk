import { Flex } from '@chakra-ui/react';

import { AccordionMenu } from '~/components/Dummies/AccordionMenu/AccordionMenu';

import { LeftFooter } from '../Footer/LeftFooter';

export const Menu = () => (
    <Flex
        flexDirection='column'
        justifyContent='space-between'
        w='256px'
        // h='1040px'
        pt='24px'
        shadow='1px 0px 0px 0px rgba(0, 0, 0, 0.1)'
    >
        <AccordionMenu />
        <LeftFooter />
    </Flex>
);
