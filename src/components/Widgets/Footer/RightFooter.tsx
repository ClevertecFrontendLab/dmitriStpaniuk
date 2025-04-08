import { Flex, Image, Text } from '@chakra-ui/react';

import writeRightButton from '../../../assets/svg/writeRightButton.svg';

export const RightFooter = () => (
    <Flex
        alignItems='center'
        flexDir='column'
        gap='8px'
        h='100%'
        justifyContent='flex-end'
        pb='52px'
        pr='55px'
    >
        <Flex
            position='relative'
            w='50px'
            h='50px'
            justifyContent='center'
            alignItems='center'
            _before={{
                content: '""',
                position: 'absolute',
                top: '-30px',
                left: '-30px',
                right: '-30px',
                bottom: '-30px',
                background:
                    'radial-gradient(50% 50% at 50% 50%, #c4ff61 0%, rgba(255, 255, 255, 0) 100%)',
                zIndex: 1,
            }}
        >
            <Image
                src={writeRightButton}
                cursor='pointer'
                alt='write'
                position='relative'
                zIndex={2}
            />
        </Flex>
        <Text fontSize='12px' fontWeight='500' color='blackAlpha.700' zIndex={2}>
            Записать рецепт
        </Text>
    </Flex>
);
