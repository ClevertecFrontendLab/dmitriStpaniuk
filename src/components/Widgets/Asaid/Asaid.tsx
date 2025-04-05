import { Flex } from '@chakra-ui/react';

import { ProfileNotification } from '../../Dummies/ProfileNotification/ProfileNotification';
import { RightFooter } from '../Footer/RightFooter';

export const Asaid = () => (
    <Flex as='aside' w='280px' flexDirection='column' gap='16px' alignItems='flex-end'>
        <ProfileNotification />
        <RightFooter />
    </Flex>
);
