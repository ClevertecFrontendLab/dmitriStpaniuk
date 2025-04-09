import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import SucculentCards from '../SucculentCards/SucculentCards';
import { succulentCardsMockData } from './constants';

export const Succulent = () => {
    const is768 = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });
    console.log(is768);
    return (
        <Flex flexDirection='column' alignItems='flex-start' position='relative' mt='30px'>
            <Text
                fontSize={['24px', '24px', '24px', '36px', '48px']}
                fontWeight='500'
                color='black'
                pb='10px'
                letterSpacing='0.04em'
            >
                Самое сочное
            </Text>
            <Button
                position='absolute'
                right={['2px', '2px', '300px', '2px', '2px']}
                top={['10px', '10px', '460px', '8px', '10px']}
                bg='customLime.400'
                px={['24px', '24px', '24px', '16px', '24px']}
                py={['10px', '10px', '10px', '8px', '24px']}
                rightIcon={<ArrowForwardIcon />}
            >
                <Text fontSize={['14px', '14px', '14px', '16px', '18px']} fontWeight='600'>
                    Вся подборка
                </Text>
            </Button>

            <Flex flexWrap='wrap' gap={['24px', '24px', '16px', '14px', '24px']}>
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
};
