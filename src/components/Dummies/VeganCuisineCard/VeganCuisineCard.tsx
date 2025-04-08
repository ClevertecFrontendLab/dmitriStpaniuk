import { Flex, Image, Text } from '@chakra-ui/react';

import CustomBadge from '../CustomBadge/CustomBadge';

interface VeganCuisineCardProps {
    title: string;
    description: string;
    tags: { id: number; icon: string; name: string }[];
    actives: { id: number; icon: string; count: number }[];
}

const VeganCuisineCard = ({ title, description, tags, actives }: VeganCuisineCardProps) => (
    <Flex
        gap='16px'
        w='calc(25% - 16px)'
        flexDirection='column'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
        p='24px'
    >
        <Text noOfLines={1} textAlign='left' fontSize='20px' fontWeight='500'>
            {title}
        </Text>
        <Text noOfLines={3} textAlign='left' fontSize='14px' fontWeight='400'>
            {description}
        </Text>
        <Flex gap='8px' justifyContent='space-between'>
            {tags.map((tag) => (
                <CustomBadge
                    key={tag.id}
                    tag={{
                        icon: tag.icon,
                        name: tag.name,
                        bg: 'customLime.50',
                    }}
                />
            ))}
            <Flex gap='8px'>
                {actives.map((active) => (
                    <Flex
                        key={active.id}
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
