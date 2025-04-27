import { Box, Flex, Image, Tag, Text, useBreakpointValue } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

import { filtersSelector } from '~/store/app-slice';
import { highlightMatch } from '~/utils/highlightMatch';

import BookmarksLikes from '../BookmarksLikes/BookmarksLikes';
import { badges } from '../NewRecipe/constants';

interface NewRecipeCardProps {
    id: string;
    image: string;
    title: string;
    description: string;
    category: string[];
    subcategory: string[];
    bookmarks: number;
    likes: number;
}

const NewRecipeCard = ({
    id,
    image,
    title,
    description,
    category,
    subcategory,
    bookmarks,
    likes,
}: NewRecipeCardProps) => {
    const navigate = useNavigate();
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
    const filters = useSelector(filtersSelector);

    const handleCardClick = () => {
        const mainCategory = category[0] || 'recipes';
        const mainSubcategory = subcategory[0] || 'all';
        navigate(`/${mainCategory}/${mainSubcategory}/${id}`);
    };

    return (
        <Box
            border='1px solid rgba(0, 0, 0, 0.08)'
            borderRadius='8px'
            position='relative'
            cursor='pointer'
            onClick={handleCardClick}
            transition='transform 0.2s, box-shadow 0.2s'
            _hover={{ transform: 'translateY(-5px)', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
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
                h='100%'
            >
                <Flex flexDirection='column' alignItems='flex-start' gap='8px' w='100%'>
                    <Text
                        fontFamily='heading'
                        fontSize={['16px', '16px', '16px', '18px', '20px']}
                        fontWeight='500'
                        noOfLines={[2, 2, 2, 1, 1]}
                        textAlign='left'
                    >
                        {highlightMatch(title, filters.searchQuery)}
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

                <Flex
                    flexDirection='column'
                    justifyContent='space-between'
                    gap='5px'
                    mt='auto'
                    pt={['0', '0', '0', '14px', '14px']}
                    w='100%'
                    minH={['auto', 'auto', 'auto', '135px', '135px']}
                >
                    <Flex
                        flexWrap='wrap'
                        gap='5px'
                        alignContent='flex-start'
                        alignItems='flex-start'
                        position={absoluteBadge ? 'absolute' : 'relative'}
                        top={absoluteBadge ? '8px' : 'auto'}
                        left={absoluteBadge ? '8px' : 'auto'}
                    >
                        {category.map((tag) => (
                            <Tag
                                key={tag}
                                bg='customLime.150'
                                textTransform='none'
                                fontSize='14px'
                                fontWeight='400'
                                gap={['2px', '2px', '2px', '8px', '8px']}
                            >
                                <Image
                                    src={badges[tag as keyof typeof badges].icon}
                                    alt='tag'
                                    w='16px'
                                    h='16px'
                                />
                                <Text
                                    fontFamily='heading'
                                    fontSize={['12px', '14px', '14px', '14px', '14px']}
                                    fontWeight='400'
                                    textAlign='left'
                                >
                                    {badges[tag as keyof typeof badges].name}
                                </Text>
                            </Tag>
                        ))}
                    </Flex>
                    <BookmarksLikes bookmarks={bookmarks} likes={likes} />
                </Flex>
            </Flex>
        </Box>
    );
};

export default NewRecipeCard;
