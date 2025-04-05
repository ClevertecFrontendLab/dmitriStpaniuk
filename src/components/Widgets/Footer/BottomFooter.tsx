import { Flex, Image, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { footerMockData } from './constants';

export const BottomFooter = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <Flex
            as='footer'
            h='84px'
            w='100%'
            bg='customLime.50'
            justifyContent='center'
            alignItems='center'
        >
            <Flex justifyContent='space-between' w='768px' h='100%'>
                {footerMockData.map((item, index) => (
                    <Flex
                        key={item.id}
                        flexDirection='column'
                        alignItems='center'
                        w='25%'
                        justifyContent='center'
                    >
                        <Flex
                            w='40px'
                            h='40px'
                            borderRadius='full'
                            justifyContent='center'
                            alignItems='center'
                            position='relative'
                            zIndex={2}
                            _before={{
                                content: '""',
                                position: 'absolute',
                                top: '-15px',
                                left: '-15px',
                                right: '-15px',
                                bottom: '-15px',
                                background:
                                    activeIndex === index
                                        ? 'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)'
                                        : 'transparent',
                                zIndex: 1,
                            }}
                            _after={{
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                borderRadius: 'full',
                                background:
                                    activeIndex === index && index !== 3
                                        ? 'blackAlpha.900'
                                        : 'transparent',
                                zIndex: 2,
                            }}
                            transition='all 0.2s'
                            cursor='pointer'
                            onClick={() => setActiveIndex(index)}
                        >
                            <Image
                                src={item.svg}
                                alt={item.title}
                                position='relative'
                                zIndex={3}
                                filter={activeIndex === index && index !== 3 ? 'invert(1)' : 'none'}
                            />
                        </Flex>
                        <Text
                            fontFamily='heading'
                            fontSize='12px'
                            fontWeight='400'
                            color='blackAlpha.700'
                            pt='5px'
                        >
                            {item.title}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
