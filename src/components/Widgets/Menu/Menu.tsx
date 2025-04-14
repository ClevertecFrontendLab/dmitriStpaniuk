import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { AccordionMenu } from '~/components/Dummies/AccordionMenu/AccordionMenu';

import { LeftFooter } from '../Footer/LeftFooter';

export const Menu = () => {
    const navigate = useNavigate();

    const handlePageChange = (path: string) => {
        navigate(path);
    };

    return (
        <Flex
            flexDirection='column'
            justifyContent='space-between'
            w='256px'
            h='calc(100vh - 80px)'
            pt='23px'
            shadow='1px 0px 0px 0px rgba(0, 0, 0, 0.1)'
        >
            <AccordionMenu onPageChange={handlePageChange} />
            <LeftFooter />
        </Flex>
    );
};
