import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';
import { Link, useLocation } from 'react-router';

import { filteredRecipesSelector } from '~/store/app-slice';
import { useAppSelector } from '~/store/hooks';

import SucculentCards from '../SucculentCards/SucculentCards';

export const Succulent = () => {
    const location = useLocation();
    const isSucculentPage = location.pathname === '/succulent';
    const recipes = useAppSelector(filteredRecipesSelector);
    const isMobile = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });
    const displayedCards = isSucculentPage ? recipes : recipes.slice(0, 4);
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
                {displayedCards.map((item) => (
                    <SucculentCards
                        data-test-id={`food-card-${item.id}`}
                        key={item.id + item.title}
                        id={String(item.id)}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        subcategory={item.subcategory}
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
