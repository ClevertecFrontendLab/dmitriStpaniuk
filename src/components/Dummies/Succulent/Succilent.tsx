import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link } from 'react-router';

import { sliderMockData } from '../NewRecipe/constants';
import SucculentCards from '../SucculentCards/SucculentCards';

export const Succulent = () => {
    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });

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

            <Link to='/succulent'>
                <Button
                    position='absolute'
                    right={['90px', '80px', '280px', '2px', '2px']}
                    top={['630px', '607px', '332px', '8px', '10px']}
                    bg='customLime.400'
                    px={['16px', '16px', '16px', '16px', '24px']}
                    py={['10px', '10px', '10px', '8px', '24px']}
                    rightIcon={<ArrowForwardIcon />}
                    data-test-id='juiciest-link-mobile'
                    display={isMobile ? 'flex' : 'none'}
                >
                    <Text fontSize={['16px', '16px', '16px', '16px', '18px']} fontWeight='600'>
                        Вся подборка
                    </Text>
                </Button>
            </Link>

            <Link to='/succulent'>
                <Button
                    position='absolute'
                    right={['90px', '80px', '280px', '2px', '2px']}
                    top={['630px', '607px', '332px', '8px', '10px']}
                    bg='customLime.400'
                    px={['16px', '16px', '16px', '16px', '24px']}
                    py={['10px', '10px', '10px', '8px', '24px']}
                    rightIcon={<ArrowForwardIcon />}
                    data-test-id='juiciest-link'
                    display={isMobile ? 'none' : 'flex'}
                >
                    <Text fontSize={['16px', '16px', '16px', '16px', '18px']} fontWeight='600'>
                        Вся подборка
                    </Text>
                </Button>
            </Link>

            <Flex flexWrap='wrap' gap={['11px', '11px', '16px', '14px', '24px']}>
                {sliderMockData.map((item) => (
                    <SucculentCards
                        key={item.id + item.title}
                        id={String(item.id)}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        bookmarks={item.bookmarks}
                        likes={item.likes}
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
};
