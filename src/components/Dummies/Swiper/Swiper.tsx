import { Box, useBreakpointValue } from '@chakra-ui/react';
import { FC } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SwiperProps {
    slides: React.ReactNode[];
    onSwiper?: (swiper: SwiperType) => void;
}

export const SwiperComponent: FC<SwiperProps> = ({ slides, onSwiper }) => {
    const slidesPerView = useBreakpointValue({
        base: 2, // для 360px и меньше
        sm: 2,
        md: 3,
        lg: 4,
        xl: 4,
        '2xl': 4,
    });
    return (
        <Box position='relative' w='100%'>
            <Swiper
                data-test-id='carousel'
                modules={[Navigation, Pagination]}
                spaceBetween={22}
                slidesPerView={slidesPerView}
                navigation={false}
                pagination={false}
                onSwiper={onSwiper}
                loop={true}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide data-test-id={`carousel-card-${index}`} key={index}>
                        {slide}
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
};
