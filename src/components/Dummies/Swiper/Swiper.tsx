import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface SwiperProps {
    slides: React.ReactNode[];
    onSwiper?: (swiper: SwiperType) => void;
}

export const SwiperComponent: FC<SwiperProps> = ({ slides, onSwiper }) => (
    <Box position='relative' w='100%'>
        <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={22}
            slidesPerView={4}
            navigation={false}
            pagination={false}
            onSwiper={onSwiper}
            loop={true}
        >
            {slides.map((slide, index) => (
                <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
        </Swiper>
    </Box>
);
