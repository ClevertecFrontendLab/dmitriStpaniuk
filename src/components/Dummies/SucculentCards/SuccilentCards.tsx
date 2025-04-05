import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { succulentCardsMockData } from './constants';

export const SucculentCards = () => (
    <Flex flexDirection='column' alignItems='flex-start'>
        <Text
            pt='44px'
            fontFamily='heading'
            fontSize='48px'
            fontWeight='500'
            color='black'
            pb='10px'
            letterSpacing='0.045em'
        >
            Самое сочное
        </Text>
        <Flex>
            {succulentCardsMockData.map((item) => (
                <Box key={item.id}>
                    <Image src={item.image} alt={item.title} />
                </Box>
            ))}
        </Flex>
    </Flex>
);
