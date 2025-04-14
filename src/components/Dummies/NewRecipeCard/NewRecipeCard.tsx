import { Badge, Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface NewRecipeCardProps {
    image: string;
    title: string;
    description: string;
    tags: {
        id: number;
        icon: string;
        name: string;
    };
    actives: {
        id: number;
        icon: string;
        count: number;
    }[];
}
const NewRecipeCard = ({ image, title, description, tags, actives }: NewRecipeCardProps) => {
    const showDescription = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
        '2xl': true,
    });
    const absoluteBadge = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });
    return (
        <Box
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            position='relative'
            minW={[
                'calc(40% - 16px)',
                'calc(50% - 6px)',
                'calc(24% - 17px)',
                'calc(33% - 11px)',
                'calc(25% - 16px)',
            ]}
            maxW={[
                'calc(40% - 16px)',
                'calc(24% - 16px)',
                'calc(24% - 16px)',
                'calc(33% - 11px)',
                'calc(25% - 16px)',
            ]}
        >
            <Image
                src={image}
                alt='recipe'
                borderTopLeftRadius='8px'
                borderTopRightRadius='8px'
                w='100%'
                h={['128px', '128px', '128px', '230px', '230px']}
                objectFit='cover'
            />
            <Flex
                flexDirection='column'
                alignItems='flex-start'
                p={['8px 8px 4px', '8px 8px 4px', '8px 8px 4px', '12px', '16px 24px 20px']}
            >
                <Flex flexDirection='column' alignItems='flex-start' gap='8px'>
                    <Text
                        fontFamily='heading'
                        fontSize={['16px', '16px', '16px', '18px', '20px']}
                        fontWeight='500'
                        noOfLines={[2, 2, 2, 1, 1]}
                        textAlign='left'
                    >
                        {title}
                    </Text>
                    <Text
                        fontSize='14px'
                        fontWeight='400'
                        textAlign='left'
                        noOfLines={3}
                        lineHeight='143%'
                    >
                        {showDescription ? description : ''}
                    </Text>
                </Flex>
                <Flex pt={['0', '0', '0', '24px', '24px']} justifyContent='space-between' w='100%'>
                    <Badge
                        bg='customLime.150'
                        textTransform='none'
                        fontSize='14px'
                        fontWeight='400'
                        display='flex'
                        alignItems='center'
                        px={['0', '4px', '1px', '8px', '8px']}
                        py={['0', '1px', '0', '2px', '2px']}
                        borderRadius='4px'
                        gap={['2px', '2px', '2px', '8px', '8px']}
                        position={absoluteBadge ? 'absolute' : 'relative'}
                        top={absoluteBadge ? ['8px', '8px', '8px', '8px', '8px'] : 'auto'}
                        left={absoluteBadge ? ['8px', '8px', '8px', '8px', '8px'] : 'auto'}
                    >
                        <Image src={tags.icon} alt='tag' w='16px' h='16px' />
                        <Text
                            fontFamily='heading'
                            fontSize={['12px', '14px', '14px', '14px', '14px']}
                            fontWeight='400'
                        >
                            {tags.name}
                        </Text>
                    </Badge>
                    <Flex gap='8px'>
                        {actives.map((active) => (
                            <Flex key={active.id + active.icon} alignItems='center' gap='6px'>
                                <Image src={active.icon} alt='active' />
                                <Text fontSize='14px' fontWeight='400' color='customLime.600'>
                                    {active.count}
                                </Text>
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
};

export default NewRecipeCard;
