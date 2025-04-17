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
            h='100%'
            flexDirection='column'
            justifyContent='space-between'
            w={['314px', '314px', '314px', '256px', '256px']}
            pt={['0', '0', '0', '23px', '23px']}
            shadow={[
                'none',
                'none',
                'none',
                '1px 0px 0px 0px rgba(0, 0, 0, 0.1)',
                '1px 0px 0px 0px rgba(0, 0, 0, 0.1)',
            ]}
        >
            <AccordionMenu onPageChange={handlePageChange} />
            <LeftFooter />
        </Flex>
    );
};
