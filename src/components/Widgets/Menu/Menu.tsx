import { Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router';

import { AccordionMenu } from '~/components/Dummies/AccordionMenu/AccordionMenu';

import { LeftFooter } from '../Footer/LeftFooter';

interface MenuProps {
    onClose: () => void;
}

export const Menu = ({ onClose }: MenuProps) => {
    const navigate = useNavigate();

    const handlePageChange = (path: string) => {
        navigate(path);
    };

    return (
        <Flex
            h='full'
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
            <AccordionMenu onPageChange={handlePageChange} onClose={onClose} />
            <LeftFooter />
        </Flex>
    );
};
