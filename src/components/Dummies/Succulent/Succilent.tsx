import { Flex, Text } from '@chakra-ui/react';

import SucculentCards from '../SucculentCards/SucculentCards';
import { succulentCardsMockData } from './constants';

export const Succulent = () => (
    <Flex flexDirection='column' alignItems='flex-start'>
        <Text
            pt='30px'
            fontFamily='heading'
            fontSize={['24px', '24px', '24px', '36px', '48px']}
            fontWeight='500'
            color='black'
            pb='10px'
            letterSpacing='0.04em'
        >
            Самое сочное
        </Text>
        <Flex flexWrap='wrap' gap={['24px', '24px', '24px', '14px', '24px']}>
            {succulentCardsMockData.map((item) => (
                <SucculentCards
                    key={item.id + item.title}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    actives={item.actives}
                />
            ))}
        </Flex>
    </Flex>
);
