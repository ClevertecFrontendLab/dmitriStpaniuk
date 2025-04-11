import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text } from '@chakra-ui/react';

import SucculentCards from '../SucculentCards/SucculentCards';
import { succulentCardsMockData } from './constants';

export const Succulent = () => (
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
            right={['90px', '80px', '280px', '2px', '2px']}
            top={['630px', '607px', '332px', '8px', '10px']}
            bg='customLime.400'
            px={['16px', '16px', '16px', '16px', '24px']}
            py={['10px', '10px', '10px', '8px', '24px']}
            rightIcon={<ArrowForwardIcon />}
        >
            <Text fontSize={['16px', '16px', '16px', '16px', '18px']} fontWeight='600'>
                Вся подборка
            </Text>
        </Button>

        <Flex flexWrap='wrap' gap={['11px', '11px', '16px', '14px', '24px']}>
            {succulentCardsMockData.map((item) => (
                <SucculentCards
                    key={item.id + item.title}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    actives={item.actives}
                    width={[
                        'calc(50% - 12px)',
                        '100%',
                        'calc(50% - 8px)',
                        '100%',
                        'calc(50% - 12px)',
                    ]}
                />
            ))}
        </Flex>
    </Flex>
);
