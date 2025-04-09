import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

const CustomBadge = ({ tag }: { tag: { icon: string; name: string; bg: string } }) => {
    const absoluteBadge = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });

    return (
        <Flex
            // h='100%'
            alignItems='center'
            bg={tag.bg}
            px={['0', '0', '1px', '8px', '8px']}
            py={['0', '0', '0', '2px', '2px']}
            borderRadius='4px'
            gap={['2px', '2px', '2px', '8px', '8px']}
            position={absoluteBadge ? 'absolute' : 'relative'}
            top={absoluteBadge ? ['8px', '8px', '8px', '8px', '8px'] : 'auto'}
            left={absoluteBadge ? ['8px', '8px', '8px', '8px', '8px'] : 'auto'}
        >
            <Image src={tag.icon} alt='tag' w='16px' h='16px' />
            <Text
                fontFamily='heading'
                fontSize={['12px', '12px', '14px', '14px', '14px']}
                fontWeight='400'
            >
                {tag.name}
            </Text>
        </Flex>
    );
};

export default CustomBadge;
