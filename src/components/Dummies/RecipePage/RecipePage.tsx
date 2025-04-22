import {
    Badge,
    Button,
    Container,
    Flex,
    Heading,
    Image,
    NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useBreakpointValue,
    VStack,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import cheliki from '~/assets/svg/main/cheliki.svg';
import clock from '~/assets/svg/main/clock.svg';
import headPlus from '~/assets/svg/main/headPlus.svg';
import bookmark from '~/assets/svg/main/new/bookmark.svg';
import like from '~/assets/svg/main/new/like.svg';
import { sliderMockData } from '~/components/Dummies/NewRecipe/constants';
import { badges } from '~/components/Dummies/NewRecipe/constants';

import BookmarksLikes from '../BookmarksLikes/BookmarksLikes';

interface Ingredient {
    title: string;
    count: string;
    measureUnit: string;
}

const RecipePage = () => {
    const { category: _category, subcategory: _subcategory, id } = useParams();
    const recipe = sliderMockData.find((item) => item.id === id);
    const [portions, setPortions] = useState(recipe?.portions || 1);
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        if (recipe) {
            setPortions(recipe.portions);
            setIngredients(recipe.ingredients);
        }
    }, [recipe]);

    const handlePortionsChange = (value: string) => {
        const newPortions = parseInt(value) || 1;
        setPortions(newPortions);

        if (recipe) {
            const originalPortions = recipe.portions;
            const ratio = newPortions / originalPortions;

            const updatedIngredients = recipe.ingredients.map((ingredient) => {
                const count = Number(ingredient.count);
                if (count > 0) {
                    return {
                        ...ingredient,
                        count: Math.round(count * ratio).toString(),
                    };
                }
                return ingredient;
            });

            setIngredients(updatedIngredients);
        }
    };

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
            <VStack spacing='40px' align='stretch' alignItems='center'>
                <Flex gap={4}>
                    <Image
                        borderRadius='8px'
                        src={recipe.image}
                        alt={recipe.title}
                        w='553px'
                        h='410px'
                        objectFit='cover'
                    />
                    <Flex direction='column' gap={4} w='100%' justifyContent='space-between'>
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
                                        {badges[tag as keyof typeof badges]?.icon && (
                                            <Image
                                                src={badges[tag as keyof typeof badges].icon}
                                                alt={badges[tag as keyof typeof badges].name}
                                                w='16px'
                                                h='16px'
                                            />
                                        )}
                                        {badges[tag as keyof typeof badges]?.name || tag}
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
                        <Flex gap={2} justifyContent='space-between'>
                            <Badge
                                backgroundColor='rgba(0, 0, 0, 0.06)'
                                colorScheme='green'
                                p={1}
                                borderRadius='md'
                                display='flex'
                                alignItems='center'
                                gap={2}
                                alignSelf='flex-end'
                            >
                                <Image src={clock} w='16px' h='16px' />
                                <Text fontWeight={400} fontSize='14px'>
                                    {recipe.time}
                                </Text>
                            </Badge>
                            <Flex gap={2}>
                                <Button variant='outline' gap={2} borderRadius='md' p='10px 20px'>
                                    <Image src={like} w='16px' h='16px' />
                                    <Text fontWeight={600} fontSize='18px'>
                                        Оценить рецепт
                                    </Text>
                                </Button>
                                <Button
                                    bg='#b1ff2e'
                                    variant='outline'
                                    gap={2}
                                    borderRadius='md'
                                    p='10px 20px'
                                >
                                    <Image src={bookmark} w='16px' h='16px' />
                                    <Text fontWeight={600} fontSize='18px'>
                                        Сохранить в закладки
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex gap={4} w='50%' flexDirection='column'>
                    <Flex flexDirection='column' justifyContent='space-between' gap='20px'>
                        <Text alignSelf='flex-start' fontSize='14px' fontWeight='400'>
                            * Калорийность на 1 порцию
                        </Text>
                        <Flex gap={2}>
                            <Stat border='1px solid rgba(0, 0, 0, 0.08)' borderRadius='md' p={2}>
                                <StatLabel fontSize='14px' fontWeight='400' color='blackAlpha.600'>
                                    Клорийность
                                </StatLabel>
                                <StatNumber fontSize='36px' fontWeight='500' color='#134b00'>
                                    {recipe.nutritionValue.calories}
                                </StatNumber>
                                <StatHelpText
                                    fontSize='14px'
                                    fontWeight='600'
                                    color='blackAlpha.900'
                                >
                                    ккал
                                </StatHelpText>
                            </Stat>
                            <Stat border='1px solid rgba(0, 0, 0, 0.08)' borderRadius='md' p={2}>
                                <StatLabel fontSize='14px' fontWeight='400' color='blackAlpha.600'>
                                    Белки
                                </StatLabel>
                                <StatNumber fontSize='36px' fontWeight='500' color='#134b00'>
                                    {recipe.nutritionValue.proteins}
                                </StatNumber>
                                <StatHelpText
                                    fontSize='14px'
                                    fontWeight='600'
                                    color='blackAlpha.900'
                                >
                                    грамм
                                </StatHelpText>
                            </Stat>
                            <Stat
                                border='1px solid rgba(0, 0, 0, 0.08)'
                                borderRadius='md'
                                p={2}
                                color='blackAlpha.600'
                            >
                                <StatLabel fontSize='14px' fontWeight='400'>
                                    Жиры
                                </StatLabel>
                                <StatNumber fontSize='36px' fontWeight='500' color='#134b00'>
                                    {recipe.nutritionValue.fats}
                                </StatNumber>
                                <StatHelpText
                                    fontSize='14px'
                                    fontWeight='600'
                                    color='blackAlpha.900'
                                >
                                    грамм
                                </StatHelpText>
                            </Stat>
                            <Stat
                                border='1px solid rgba(0, 0, 0, 0.08)'
                                borderRadius='md'
                                p={2}
                                color='blackAlpha.600'
                            >
                                <StatLabel fontSize='14px' fontWeight='400'>
                                    Углеводы
                                </StatLabel>
                                <StatNumber fontSize='36px' fontWeight='500' color='#134b00'>
                                    {recipe.nutritionValue.carbohydrates}
                                </StatNumber>
                                <StatHelpText
                                    fontSize='14px'
                                    fontWeight='600'
                                    color='blackAlpha.900'
                                >
                                    грамм
                                </StatHelpText>
                            </Stat>
                        </Flex>
                    </Flex>
                    <TableContainer>
                        <Table variant='simple' bg='white'>
                            <Thead>
                                <Tr>
                                    <Th w='50%'>Ингредиенты</Th>
                                    <Th>
                                        <Flex alignItems='center' gap={2} justifyContent='flex-end'>
                                            <Text>Порций</Text>
                                            <NumberInput
                                                border='1px solid rgba(0, 0, 0, 0.08)'
                                                borderRadius='md'
                                                size='sm'
                                                maxW='70px'
                                                min={1}
                                                max={40}
                                                value={portions}
                                                onChange={handlePortionsChange}
                                            >
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper />
                                                    <NumberDecrementStepper />
                                                </NumberInputStepper>
                                            </NumberInput>
                                        </Flex>
                                    </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {ingredients.map((ingredient, index) => (
                                    <Tr
                                        key={index}
                                        bg={index % 2 !== 0 ? 'white' : 'rgba(0, 0, 0, 0.06)'}
                                    >
                                        <Td>{ingredient.title}</Td>
                                        <Td isNumeric>
                                            {Number(ingredient.count) > 0
                                                ? `${ingredient.count} ${ingredient.measureUnit}`
                                                : ingredient.measureUnit}
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                    <Flex gap='20px' flexDirection='column'>
                        <Text textAlign='left' fontSize='48px' fontWeight='500'>
                            Шаги приготовления
                        </Text>
                        {recipe.steps.map((step) => (
                            <Flex
                                key={step.stepNumber}
                                border='1px solid rgba(0, 0, 0, 0.08)'
                                borderRadius='md'
                            >
                                <Image
                                    borderTopLeftRadius='md'
                                    borderBottomLeftRadius='md'
                                    maxW='346px'
                                    height='250px'
                                    src={step.image}
                                    alt={step.description}
                                />
                                <Flex
                                    gap='20px'
                                    p='20px'
                                    flexDirection='column'
                                    alignItems='flex-start'
                                >
                                    <Badge
                                        backgroundColor='rgba(0, 0, 0, 0.06)'
                                        colorScheme='green'
                                        p={1}
                                        borderRadius='md'
                                        fontSize='14px'
                                        fontWeight='400'
                                    >
                                        {`Шаг ${step.stepNumber}`}
                                    </Badge>
                                    <Text textAlign='left'>{step.description}</Text>
                                </Flex>
                            </Flex>
                        ))}
                    </Flex>
                    <Flex
                        bg='customLime.150'
                        borderRadius='8px'
                        p='24px'
                        alignItems='flex-start'
                        justifyContent='space-between'
                    >
                        <Flex gap='12px' alignItems='center'>
                            <Image
                                src='https://avatars.githubusercontent.com/u/1?v=4'
                                alt='Author'
                                borderRadius='full'
                                boxSize='96px'
                                objectFit='cover'
                            />
                            <Flex flexDir='column' alignItems='flex-start'>
                                <Text fontSize='24px' fontWeight='700'>
                                    Сергей Разумов
                                </Text>
                                <Text fontSize='14px' fontWeight='400' color='gray.600' pb='9px'>
                                    @serge25
                                </Text>
                                <Button
                                    variant='outline'
                                    size='sx'
                                    borderRadius='6px'
                                    bg='black'
                                    color='white'
                                    _hover={{ bg: 'gray.800' }}
                                    p='4px 12px'
                                    gap='6px'
                                    alignItems='center'
                                    fontSize='12px'
                                    fontWeight='600'
                                >
                                    <Image src={headPlus} w='12px' h='12px' />
                                    Подписаться
                                </Button>
                            </Flex>
                        </Flex>
                        <Flex
                            gap='12px'
                            alignItems='flex-end'
                            flexDirection='column'
                            h='90px'
                            justifyContent='space-between'
                        >
                            <Text fontSize='14px' color='gray.600'>
                                Автор рецепта
                            </Text>
                            <Flex
                                alignItems='center'
                                gap='4px'
                                px='8px'
                                py='4px'
                                borderRadius='4px'
                            >
                                <Image src={cheliki} w='12px' h='12px' />
                                <Text fontSize='12px' fontWeight='600' color='#2db100'>
                                    125
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            </VStack>
        </Container>
    );
};

export default RecipePage;
