import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text } from '@chakra-ui/react';

import NewRecipeCard from '../NewRecipeCard/NewRecipeCard';
import { newRecipeCardMockData } from './constants';

const NewRecipe = () => (
    <Flex flexDirection='column' alignItems='flex-start' w='100%'>
        <Text
            pt={['15px', '15px', '15px', '47px', '44px']}
            fontFamily='heading'
            fontSize={['24px', '24px', '24px', '36px', '48px']}
            fontWeight='500'
            color='black'
            pb={['10px', '10px', '10px', '17px', '10px']}
            letterSpacing='0.045em'
        >
            Новые рецепты
        </Text>
        <Flex position='relative' w='100%'>
            <IconButton
                aria-label=''
                icon={<ArrowBackIcon color='white' boxSize={8} />}
                position='absolute'
                left='0'
                top='46%'
                transform='translateY(-90%)'
                zIndex={33}
                h='48px'
                w='48px'
                bg='black'
                boxShadow='0px 4px 12px rgba(0, 0, 0, 0.1)'
                _hover={{ bg: 'gray.800' }}
            />
            <Flex
                gap={['12px', '12px', '12px', '10px', '22px']}
                overflowX='auto'
                w='100%'
                sx={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                    scrollSnapType: 'x mandatory',
                    '& > div': {
                        scrollSnapAlign: 'start',
                    },
                }}
            >
                {newRecipeCardMockData.map((item) => (
                    <NewRecipeCard
                        key={item.id + item.title}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        tags={item.tags}
                        actives={item.actives}
                    />
                ))}
            </Flex>
            <IconButton
                aria-label='Next slide'
                icon={<ArrowForwardIcon color='white' boxSize={8} />}
                position='absolute'
                right='0'
                top='45%'
                transform='translateY(-80%)'
                zIndex={33}
                h='48px'
                w='48px'
                bg='black'
                boxShadow='0px 4px 12px rgba(0, 0, 0, 0.1)'
                _hover={{ bg: 'gray.800' }}
            />
        </Flex>
    </Flex>
);

export default NewRecipe;
