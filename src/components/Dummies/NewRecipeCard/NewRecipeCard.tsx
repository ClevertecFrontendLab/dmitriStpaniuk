import { Box, Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

import CustomBadge from '../CustomBadge/CustomBadge';

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
    return (
        <Box
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            position='relative'

            minW={[
                'calc(40% - 16px)',
                'calc(50% - 16px)',
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
                p={['8px 8px 4px', '8px 8px 4px', '8px 8px 4px', '12px', '16px 24px 20px'] }
            >
                <Flex flexDirection='column' alignItems='flex-start' gap='8px' >
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
                    <CustomBadge
                        key={tags.id + tags.name}
                            tag={{
                                icon: tags.icon,
                                name: tags.name,
                                bg: 'customLime.150',
                            }}
                        />
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
