import { Flex } from '@chakra-ui/react';

import { ProfileNotification } from '../../Dummies/ProfileNotification/ProfileNotification';
import { RightFooter } from '../Footer/RightFooter';

export const Asaid = () => (
    <Flex
        as='aside'
        w='270px'
        flexDirection='column'
        gap='16px'
        alignItems='flex-end'
        // h='calc(100vh - 80px)'
    >
        <ProfileNotification />
        <RightFooter />
    </Flex>
);
