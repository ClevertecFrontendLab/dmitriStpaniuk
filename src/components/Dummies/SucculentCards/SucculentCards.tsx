import { Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

import bookmark from '~/assets/svg/main/new/bookmark.svg';

import CustomBadge from '../CustomBadge/CustomBadge';

interface SucculentCardsProps {
    image: string;
    title: string;
    description: string;
    tags: {
        id: number;
        icon: string;
        name: string;
    }[];
    actives: {
        id: number;
        icon: string;
        count: number;
    }[];
}

const SucculentCards = ({ image, title, description, tags, actives }: SucculentCardsProps) => (
    <Flex
        w={[
            'calc(50% - 12px)',
            'calc(50% - 12px)',
            'calc(50% - 12px)',
            'calc(100%)',
            'calc(50% - 12px)',
        ]}
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
        maxH='250px'
    >
        <Image
            src={image}
            alt={title}
            borderTopLeftRadius='8px'
            borderBottomLeftRadius='8px'
            w='53%'
        />
        <Flex p='20px' flexDirection='column' justifyContent='space-between'>
            <Flex justifyContent='space-between' alignItems='flex-start'>
                {tags.map((tag) => (
                    <CustomBadge
                        key={tag.id + tag.name}
                        tag={{
                            icon: tag.icon,
                            name: tag.name,
                            bg: 'customLime.50',
                        }}
                    />
                ))}
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
            <Text
                textAlign='left'
                fontFamily='heading'
                fontSize='20px'
                fontWeight='500'
                noOfLines={1}
            >
                {title}
            </Text>
            <Text textAlign='left' fontSize='14px' fontWeight='400' noOfLines={3} lineHeight='143%'>
                {description}
            </Text>
            <Stack direction='row' justifyContent='flex-end'>
                <Button h='32px' variant='outline' leftIcon={<img src={bookmark} alt='bookmark' />}>
                    <Text fontSize='14px' fontWeight='600' color='blackAlpha.800'>
                        Сохранить
                    </Text>
                </Button>
                <Button
                    h='32px'
                    bg='black'
                    color='white'
                    variant='outline'
                    _hover={{
                        bg: 'black',
                        color: 'gray.200',
                    }}
                >
                    <Text fontSize='14px' fontWeight='600' color='white'>
                        Готовить
                    </Text>
                </Button>
            </Stack>
        </Flex>
    </Flex>
);

export default SucculentCards;
