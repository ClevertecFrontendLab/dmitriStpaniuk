import { Badge, Flex, Image, Text } from '@chakra-ui/react';

interface VeganCuisineCardProps {
    title: string;
    description: string;
    tags: { id: number; icon: string; name: string }[];
    actives: { id: number; icon: string; count: number }[];
}

const VeganCuisineCard = ({ title, description, tags, actives }: VeganCuisineCardProps) => (
    <Flex
        gap={['12px', '14px', '14px', '14px', '12px']}
        w={['100%', '100%', '88%', '48%', 'calc(45% - 6px)']}
        flexDirection='column'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
        p={['12px', '12px', '12px', '16px', '24px']}
    >
        <Text
            noOfLines={1}
            textAlign='left'
            fontSize={['16px', '16px', '16px', '20px', '20px']}
            fontWeight='500'
        >
            {title}
        </Text>
        <Text noOfLines={3} textAlign='left' fontSize='14px' fontWeight='400'>
            {description}
        </Text>
        <Flex gap='8px' justifyContent='space-between'>
            {tags.map((tag) => (
                <Badge
                    key={tag.id + tag.name}
                    // position={is768 ? 'absolute' : 'relative'}
                    // top={is768 ? '8px' : '0'}
                    // left={is768 ? '8px' : '0'}
                    bg='customLime.50'
                    borderRadius='4px'
                    px={['4px', '4px', '4px', '8px', '8px']}
                    py='2px'
                    alignItems='center'
                    display='flex'
                    gap={['2px', '2px', '2px', '8px', '8px']}
                    textTransform='none'
                    fontSize='14px'
                    fontWeight='400'
                >
                    <Image src={tag.icon} alt='tag' />
                    {tag.name}
                </Badge>
            ))}
            <Flex gap={['8px', '8px', '8px', '8px', '8px']}>
                {actives.map((active) => (
                    <Flex
                        key={active.id + active.count}
                        // flexDirection='row'
                        alignItems='center'
                        gap='6px'
                    >
                        <Image src={active.icon} alt='active' />
                        <Text fontSize='14px' fontWeight='400' color='customLime.600'>
                            {active.count}
                        </Text>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    </Flex>
);

export default VeganCuisineCard;
