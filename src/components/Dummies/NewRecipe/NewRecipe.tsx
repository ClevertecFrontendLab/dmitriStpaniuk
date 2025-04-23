import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons';
import { Flex, IconButton, Text, useBreakpointValue } from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';

import NewRecipeCard from '../NewRecipeCard/NewRecipeCard';
import { SwiperComponent } from '../Swiper/Swiper';
import { sliderMockData } from './constants';

export const NewRecipe: FC = () => {
    const isMobile = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
        '2xl': true,
    });

    const swiperRef = useRef<SwiperType | null>(null);

    const slides = [...sliderMockData]
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .map((item) => (
            <NewRecipeCard
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                subcategory={item.subcategory}
                bookmarks={item.bookmarks}
                likes={item.likes}
            />
        ));

    const handlePrev = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    const handleNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    };

    return (
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
            <Flex w='100%' position='relative'>
                {isMobile && (
                    <IconButton
                        aria-label='Previous slide'
                        icon={<ArrowBackIcon color='white' boxSize={8} />}
                        position='absolute'
                        left='-10px'
                        top='46%'
                        transform='translateY(-90%)'
                        zIndex={33}
                        h='48px'
                        w='48px'
                        bg='black'
                        boxShadow='0px 4px 12px rgba(0, 0, 0, 0.1)'
                        _hover={{ bg: 'gray.800' }}
                        onClick={handlePrev}
                    />
                )}
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
                    <SwiperComponent
                        slides={slides}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                    />
                </Flex>
                {isMobile && (
                    <IconButton
                        aria-label='Next slide'
                        icon={<ArrowForwardIcon color='white' boxSize={8} />}
                        position='absolute'
                        right='-10px'
                        top='45%'
                        transform='translateY(-80%)'
                        zIndex={33}
                        h='48px'
                        w='48px'
                        bg='black'
                        boxShadow='0px 4px 12px rgba(0, 0, 0, 0.1)'
                        _hover={{ bg: 'gray.800' }}
                        onClick={handleNext}
                    />
                )}
            </Flex>
        </Flex>
    );
};
export default NewRecipe;
