import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { mockNotificationData } from './constants';

export const ProfileNotification = () => {
    const gapNotification = useBreakpointValue({
        base: '18px',
        sm: '18px',
        md: '17px',
    });
    return (
        <Flex
            alignItems='center'
            fontFamily='heading'
            fontWeight={600}
            fontSize='12px'
            color='customLime.600'
            gap={gapNotification}
        >
            {mockNotificationData.map((item) => (
                <Flex key={item.id} alignItems='center' gap='6px'>
                    <Image src={item.icon} alt={item.icon} w='12px' h='12px' />
                    <Text>{item.count}</Text>
                </Flex>
            ))}
        </Flex>
    );
};
