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
import { useNavigate } from 'react-router';

import bookmark from '~/assets/svg/main/new/bookmark.svg';
import like from '~/assets/svg/main/new/like.svg';

import { badges, sliderMockData } from '../NewRecipe/constants';

// Define a type for the badge keys
type BadgeKey = keyof typeof badges;

interface SucculentCardsProps {
    id: string;
    image: string;
    title: string;
    description: string;
    category?: string[];
    subcategory?: string[];
    bookmarks: number;
    likes: number;
    width?: string[];
}

const SucculentCards = ({
    id,
    image,
    title,
    description,
    subcategory,
    bookmarks,
    likes,
    width,
}: SucculentCardsProps) => {
    const navigate = useNavigate();
    const is768 = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });

    const handleCookClick = () => {
        const recipe = sliderMockData.find((item) => item.id === id);
        if (recipe) {
            const mainCategory = recipe.category[0] || 'recipes';
            const mainSubcategory = recipe.subcategory[0] || 'all';
            navigate(`/${mainCategory}/${mainSubcategory}/${id}`);
        }
    };

    return (
        <Flex
            w={width}
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
                    {subcategory?.map((tag) => {
                        const badgeKey = tag as BadgeKey;
                        const badge = badges[badgeKey];

                        if (!badge) return null;

                        return (
                            <Badge
                                key={tag}
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
                                <Image src={badge.icon} alt='tag' />
                                {badge.name}
                            </Badge>
                        );
                    })}
                    <Flex gap='20px'>
                        <Flex key={bookmarks} alignItems='center' gap='6px'>
                            <Image src={bookmark} alt='bookmark' />
                            <Text fontSize='12px' fontWeight='600' color='customLime.600'>
                                {bookmarks}
                            </Text>
                        </Flex>
                        <Flex key={likes} alignItems='center' gap='6px'>
                            <Image src={like} alt='like' />
                            <Text fontSize='12px' fontWeight='600' color='customLime.600'>
                                {likes}
                            </Text>
                        </Flex>
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
                        onClick={handleCookClick}
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
