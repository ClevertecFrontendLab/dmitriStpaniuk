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
import NewRecipe from '../NewRecipe/NewRecipe';

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

    const nutritionFields: {
        key: keyof typeof recipe.nutritionValue;
        label: string;
        unit: string;
    }[] = [
        { key: 'calories', label: 'Калорийность', unit: 'ккал' },
        { key: 'proteins', label: 'Белки', unit: 'грамм' },
        { key: 'fats', label: 'Жиры', unit: 'грамм' },
        { key: 'carbohydrates', label: 'Углеводы', unit: 'грамм' },
    ];

    return (
        <Container maxW='container' py={10} px={0}>
            <VStack spacing='20px' align='stretch' alignItems='center'>
                <Flex gap={4} flexDirection={['column', 'column', 'row', 'row', 'row']}>
                    <Image
                        borderRadius='8px'
                        src={recipe.image}
                        alt={recipe.title}
                        w={['232px', '328px', '232px', '353px', '553px']}
                        h={['224px', '224px', '224px', '410px', '410px']}
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
                            fontSize={['24px', '24px', '24px', '48px', '48px']}
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
                        <Flex
                            gap={2}
                            justifyContent='space-between'
                            flexDirection={['column', 'column', 'row', 'row', 'row']}
                        >
                            <Badge
                                backgroundColor='rgba(0, 0, 0, 0.06)'
                                colorScheme='green'
                                p={['2px 8px', '2px 8px', '2px 8px', '4px 8px', '4px 8px']}
                                borderRadius='md'
                                display='flex'
                                alignItems='center'
                                gap={['4px', '4px', '4px', '8px', '8px']}
                                alignSelf={[
                                    'flex-start',
                                    'flex-start',
                                    'flex-end',
                                    'flex-end',
                                    'flex-end',
                                ]}
                            >
                                <Image
                                    src={clock}
                                    w={['12px', '12px', '12px', '14px', '16px']}
                                    h={['12px', '12px', '12px', '14px', '16px']}
                                />
                                <Text
                                    fontWeight={400}
                                    fontSize={['12px', '12px', '12px', '14px', '14px']}
                                >
                                    {recipe.time}
                                </Text>
                            </Badge>
                            <Flex gap={2}>
                                <Button
                                    variant='outline'
                                    gap={2}
                                    borderRadius='md'
                                    p={['4px 8px', '4px 8px', '4px 8px', '6px 12px', '10px 24px']}
                                >
                                    <Image
                                        src={like}
                                        w={['12px', '12px', '12px', '14px', '16px']}
                                        h={['12px', '12px', '12px', '14px', '16px']}
                                    />
                                    <Text
                                        fontWeight={600}
                                        fontSize={['12px', '12px', '12px', '14px', '18px']}
                                    >
                                        Оценить рецепт
                                    </Text>
                                </Button>
                                <Button
                                    bg='#b1ff2e'
                                    variant='outline'
                                    gap={2}
                                    borderRadius='md'
                                    p={['4px 8px', '4px 8px', '4px 8px', '6px 12px', '10px 24px']}
                                >
                                    <Image
                                        src={bookmark}
                                        w={['12px', '12px', '12px', '14px', '16px']}
                                        h={['12px', '12px', '12px', '14px', '16px']}
                                    />
                                    <Text
                                        fontWeight={600}
                                        fontSize={['12px', '12px', '12px', '14px', '18px']}
                                    >
                                        Сохранить в закладки
                                    </Text>
                                </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex gap={4} w={['100%', '100%', '100%', '75%', '50%']} flexDirection='column'>
                    <Flex flexDirection='column' justifyContent='space-between' gap='20px'>
                        <Text alignSelf='flex-start' fontSize='14px' fontWeight='400'>
                            * Калорийность на 1 порцию
                        </Text>
                        <Flex gap={2} flexDirection={['column', 'column', 'row', 'row', 'row']}>
                            {nutritionFields.map(({ key, label, unit }) => (
                                <Stat
                                    key={key}
                                    border='1px solid rgba(0, 0, 0, 0.08)'
                                    borderRadius='md'
                                    p={2}
                                    color='blackAlpha.600'
                                >
                                    <Flex
                                        direction={['row', 'row', 'column', 'column', 'column']}
                                        alignItems='center'
                                        justifyContent='space-between'
                                    >
                                        <StatLabel
                                            fontSize='14px'
                                            fontWeight='400'
                                            color='blackAlpha.600'
                                        >
                                            {label}
                                        </StatLabel>
                                        <StatNumber
                                            fontSize='36px'
                                            fontWeight='500'
                                            color='#134b00'
                                        >
                                            {recipe.nutritionValue[key]}
                                        </StatNumber>
                                        <StatHelpText
                                            fontSize='14px'
                                            fontWeight='600'
                                            color='blackAlpha.900'
                                            mb={0}
                                        >
                                            {unit}
                                        </StatHelpText>
                                    </Flex>
                                </Stat>
                            ))}
                        </Flex>
                    </Flex>
                    <TableContainer>
                        <Table variant='simple' bg='white'>
                            <Thead>
                                <Tr>
                                    <Th>
                                        <Text fontSize='12px' fontWeight='700' color=' #2db100'>
                                            Ингредиенты
                                        </Text>
                                    </Th>
                                    <Th>
                                        <Flex alignItems='center' gap={2} justifyContent='flex-end'>
                                            <Text fontSize='12px' fontWeight='700' color=' #2db100'>
                                                Порций
                                            </Text>
                                            <NumberInput
                                                border='1px solid rgba(0, 0, 0, 0.08)'
                                                borderRadius='md'
                                                size={['md', 'md', 'md', 'md', 'md']}
                                                // minW={['70px', '70px', '90px', '90px', '90px']}
                                                // maxW={['70px', '70px', '90px', '90px', '90px']}
                                                min={1}
                                                max={40}
                                                value={portions}
                                                onChange={handlePortionsChange}
                                            >
                                                <NumberInputField />
                                                <NumberInputStepper>
                                                    <NumberIncrementStepper data-test-id='increment-stepper' />
                                                    <NumberDecrementStepper data-test-id='decrement-stepper' />
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
                                        <Td isNumeric data-test-id={`ingredient-quantity-${index}`}>
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
                        <Text
                            textAlign='left'
                            fontSize={['24px', '24px', '24px', '48px', '48px']}
                            fontWeight='500'
                        >
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
                                    maxW={['158px', '158px', '158px', '346px', '346px']}
                                    height={['128px', '128px', '128px', '244px', '244px']}
                                    src={step.image}
                                    alt={step.description}
                                />
                                <Flex
                                    gap={['12px', '12px', '12px', '20px', '20px']}
                                    p={['8px', '8px', '8px', '20px 24px', '20px 24px']}
                                    flexDirection='column'
                                    alignItems='flex-start'
                                >
                                    <Badge
                                        backgroundColor='rgba(0, 0, 0, 0.06)'
                                        colorScheme='green'
                                        p={['2px 8px', '2px 8px', '2px 8px', '2px 8px', '2px 8px']}
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
                        p={['12px', '12px', '24px', '24px', '24px']}
                        alignItems='flex-start'
                        justifyContent='space-between'
                        position='relative'
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
                                <Text
                                    fontSize={['18px', '18px', '24px', '24px', '24px']}
                                    fontWeight='700'
                                >
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
                            <Text
                                fontSize='14px'
                                color='gray.600'
                                position={[
                                    'relative',
                                    'absolute',
                                    'relative',
                                    'relative',
                                    'relative',
                                ]}
                                top='1'
                                right='2'
                            >
                                Автор рецепта
                            </Text>
                            <Flex
                                alignItems='center'
                                gap='4px'
                                px='8px'
                                py='4px'
                                borderRadius='4px'
                                position={[
                                    'relative',
                                    'absolute',
                                    'relative',
                                    'relative',
                                    'relative',
                                ]}
                                bottom='1'
                                right='2'
                            >
                                <Image src={cheliki} w='12px' h='12px' />
                                <Text fontSize='12px' fontWeight='600' color='#2db100'>
                                    125
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
                <NewRecipe />
            </VStack>
        </Container>
    );
};

export default RecipePage;
