import { Badge, Button, Flex, Image, Stack, Text, useBreakpointValue } from '@chakra-ui/react';

import bookmark from '~/assets/svg/main/new/bookmark.svg';

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

const SucculentCards = ({ image, title, description, tags, actives }: SucculentCardsProps) => {
    const is768 = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
        '2xl': true,
    });
    return (
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
            <Flex p='20px 24px' flexDirection='column' justifyContent='space-between'>
                <Flex justifyContent='space-between' alignItems='center' position='relative'>
                    {tags.map((tag) => (
                        <Badge
                            key={tag.id + tag.name}
                            bg='customLime.50'
                            borderRadius='8px'
                            px='8px'
                            py='2px'
                            alignItems='center'
                            display='flex'
                            gap='px'
                            textTransform='none'
                            fontSize='14px'
                            fontWeight='400'
                        >
                            <Image src={tag.icon} alt='tag' />
                            {tag.name}
                        </Badge>
                    ))}
                    <Flex gap='20px'>
                        {actives.map((active) => (
                            <Flex key={active.id + active.icon} alignItems='center' gap='6px'>
                                <Image src={active.icon} alt='active' />
                                <Text fontSize='12px' fontWeight='600' color='customLime.600'>
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
                {is768 && (
                    <Text
                        textAlign='left'
                        fontSize='14px'
                        fontWeight='400'
                        noOfLines={3}
                        lineHeight='143%'
                    >
                        {description}
                    </Text>
                )}
                <Stack direction='row' justifyContent='flex-end' spacing='8px' pt='10px'>
                    <Button
                        h='34px'
                        variant='outline'
                        leftIcon={<img src={bookmark} alt='bookmark' />}
                    >
                        <Text fontSize='14px' fontWeight='600' color='blackAlpha.800'>
                            Сохранить
                        </Text>
                    </Button>
                    <Button
                        p='12px'
                        h='34px'
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
};

export default SucculentCards;
