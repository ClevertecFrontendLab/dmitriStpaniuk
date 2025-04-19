import {
    Badge,
    Container,
    Flex,
    Heading,
    Image,
    Text,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router';

import { sliderMockData } from '~/components/Dummies/NewRecipe/constants';
import { badgesIcons } from '~/components/Dummies/NewRecipe/constants';

import BookmarksLikes from '../BookmarksLikes/BookmarksLikes';

const RecipePage = () => {
    const { category: _category, subcategory: _subcategory, id } = useParams();
    console.log(_category, _subcategory, id);
    const recipe = sliderMockData.find((item) => item.id === id);

    const showDescription = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: true,
        xl: true,
        '2xl': true,
    });

    if (!recipe) {
        return (
            <Container maxW='container.xl' py={8}>
                <Heading>Рецепт не найден</Heading>
            </Container>
        );
    }

    return (
        <Container maxW='container' py={10}>
            <VStack spacing={16} align='stretch'>
                <Flex gap={4}>
                    <Image
                        borderRadius='8px'
                        src={recipe.image}
                        alt={recipe.title}
                        // w='553px'
                        h='410px'
                        objectFit='cover'
                    />
                    <Flex direction='column' gap={4} w='100%'>
                        <Flex alignItems='center' justifyContent='space-between'>
                            <Flex gap={2} flexWrap='wrap' alignItems='center'>
                                {recipe.category.map((tag) => (
                                    <Badge
                                        key={tag}
                                        backgroundColor='#ffffd3'
                                        p={2}
                                        borderRadius='md'
                                        display='flex'
                                        alignItems='center'
                                        gap={2}
                                        cursor='pointer'
                                    >
                                        {badgesIcons[tag as keyof typeof badgesIcons]?.icon && (
                                            <Image
                                                src={
                                                    badgesIcons[tag as keyof typeof badgesIcons]
                                                        .icon
                                                }
                                                alt={
                                                    badgesIcons[tag as keyof typeof badgesIcons]
                                                        .name
                                                }
                                                w='16px'
                                                h='16px'
                                            />
                                        )}
                                        {badgesIcons[tag as keyof typeof badgesIcons]?.name || tag}
                                    </Badge>
                                ))}
                            </Flex>
                            <BookmarksLikes
                                gap='18px'
                                bookmarks={recipe.bookmarks}
                                likes={recipe.likes}
                            />
                        </Flex>

                        <Text
                            noOfLines={3}
                            lineHeight='100%'
                            fontSize='48px'
                            fontWeight='700'
                            textAlign='left'
                            pb={1}
                        >
                            {recipe.title}
                        </Text>
                        {showDescription && (
                            <Text fontSize='14px' textAlign='left'>
                                {recipe.description}
                            </Text>
                        )}
                    </Flex>
                </Flex>

                <VStack spacing={4} align='stretch'>
                    <Heading size='xl'>{recipe.title}</Heading>

                    {showDescription && (
                        <Text fontSize='lg' color='gray.600'>
                            {recipe.description}
                        </Text>
                    )}

                    <Flex gap={2} flexWrap='wrap'>
                        {recipe.category.map((tag) => (
                            <Badge
                                key={tag}
                                colorScheme='green'
                                p={2}
                                borderRadius='md'
                                display='flex'
                                alignItems='center'
                                gap={2}
                            >
                                {badgesIcons[tag as keyof typeof badgesIcons]?.icon && (
                                    <Image
                                        src={badgesIcons[tag as keyof typeof badgesIcons].icon}
                                        alt={badgesIcons[tag as keyof typeof badgesIcons].name}
                                        w='16px'
                                        h='16px'
                                    />
                                )}
                                {badgesIcons[tag as keyof typeof badgesIcons]?.name || tag}
                            </Badge>
                        ))}
                    </Flex>
                </VStack>
            </VStack>
        </Container>
    );
};

export default RecipePage;
