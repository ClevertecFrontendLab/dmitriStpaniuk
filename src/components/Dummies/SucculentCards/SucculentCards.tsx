import {
    Badge,
    Button,
    Flex,
    IconButton,
    Image,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

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
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });

    return (
        <Flex
            w={['calc(50% - 12px)', '100%', 'calc(50% - 8px)', '100%', 'calc(50% - 12px)']}
            h={['100%', '129px', '129px', '245px', '245px']}
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            maxH='250px'
            position='relative'
        >
            <Image
                src={image}
                alt={title}
                borderTopLeftRadius='8px'
                borderBottomLeftRadius='8px'
                w={['53%', '48%', '44%', '52%', '52%']}
            />
            <Flex
                p={['8px', '8px 8px 4px 8px', '10px 8px 2px 10px', '20px 24px', '20px 24px']}
                flexDirection='column'
                justifyContent='space-between'
                w='100%'
            >
                <Flex justifyContent='space-between' alignItems='center'>
                    {tags.map((tag) => (
                        <Badge
                            key={tag.id + tag.name}
                            position={is768 ? 'absolute' : 'relative'}
                            top={is768 ? '8px' : '0'}
                            left={is768 ? '8px' : '0'}
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
                    fontSize={['16px', '16px', '16px', '20px', '20px']}
                    fontWeight='500'
                    noOfLines={[2, 2, 2, 1, 1]}
                    mb={['10px', '0', '14px', '0', '0']}
                >
                    {title}
                </Text>
                {!is768 && (
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
                    {!is768 ? (
                        <Button
                            p='12px'
                            h='34px'
                            variant='outline'
                            leftIcon={<img src={bookmark} alt='bookmark' />}
                        >
                            <Text
                                fontSize={['12px', '12px', '12px', '14px', '14px']}
                                fontWeight='600'
                                color='blackAlpha.800'
                            >
                                Сохранить
                            </Text>
                        </Button>
                    ) : (
                        <IconButton
                            size='xs'
                            variant='outline'
                            icon={<img src={bookmark} alt='bookmark' />}
                            aria-label='bookmark'
                        />
                    )}
                    <Button
                        p={['8px', '8px', '10px', '12px', '12px']}
                        h={['24px', '24px', '26px', '34px', '34px']}
                        bg='black'
                        color='white'
                        variant='outline'
                        _hover={{
                            bg: 'black',
                            color: 'gray.200',
                        }}
                    >
                        <Text
                            fontSize={['12px', '12px', '12px', '14px', '14px']}
                            fontWeight='600'
                            color='white'
                        >
                            Готовить
                        </Text>
                    </Button>
                </Stack>
            </Flex>
        </Flex>
    );
};

export default SucculentCards;
