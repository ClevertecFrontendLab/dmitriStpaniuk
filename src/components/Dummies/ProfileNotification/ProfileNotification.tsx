import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import { mockNotificationData } from './constants';

export const ProfileNotification = () => {
    const gapNotification = useBreakpointValue({
        base: '18px',
        sm: '18px',
        md: '17px',
        lg: '40px',
        xl: '40px',
        '2xl': '40px',
    });
    return (
        <Flex
            flexDirection={{
                base: 'row',
                sm: 'row',
                md: 'row',
                lg: 'column',
                xl: 'column',
                '2xl': 'column',
            }}
            p={{
                lg: '24px 72px',
                xl: '24px 72px',
                '2xl': '24px 72px',
            }}
            alignItems='center'
            fontFamily='heading'
            fontWeight={600}
            fontSize={['12px', '12px', '12px', '16px', '16px', '16px']}
            color='customLime.600'
            gap={gapNotification}
        >
            {mockNotificationData.map((item) => (
                <Flex
                    key={item.id}
                    alignItems='center'
                    gap={['6px', '6px', '6px', '8px', '8px', '8px']}
                >
                    <Image
                        src={item.icon}
                        alt={item.icon}
                        w={['12px', '12px', '12px', '16px', '16px', '16px']}
                        h={['12px', '12px', '12px', '16px', '16px', '16px']}
                    />
                    <Text>{item.count}</Text>
                </Flex>
            ))}
        </Flex>
    );
};
