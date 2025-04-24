import { ChevronDownIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Stack,
    Switch,
    Tag,
    TagCloseButton,
    TagLabel,
    Text,
} from '@chakra-ui/react';
import { useState } from 'react';

import { menuMockData } from '../AccordionMenu/constants';
import AllergensSelect from '../SearchMainPage/AllergensSelect';

interface FilterOption {
    id: string;
    label: string;
    checked: boolean;
}

interface Author {
    id: string;
    name: string;
    checked: boolean;
}

const authors: Author[] = [
    { id: '1', name: 'Елена Мин', checked: false },
    { id: '2', name: 'Мирием Чоншвили', checked: false },
    { id: '3', name: 'Елена Прекрасная', checked: false },
    { id: '4', name: 'Alex Cook', checked: false },
    { id: '5', name: 'Екатерина Константинопольская', checked: false },
    { id: '6', name: 'Инна Высоцкая', checked: false },
    { id: '7', name: 'Сергей Разумов', checked: false },
    { id: '8', name: 'Анна Рогачева', checked: false },
    { id: '9', name: 'Иван Орлов', checked: false },
    { id: '10', name: 'Повар Ши', checked: false },
    { id: '11', name: 'Только новые авторы', checked: false },
];

const meatTypes: FilterOption[] = [
    { id: 'chicken', label: 'Курица', checked: false },
    { id: 'pork', label: 'Свинина', checked: false },
    { id: 'beef', label: 'Говядина', checked: false },
    { id: 'turkey', label: 'Индейка', checked: false },
    { id: 'duck', label: 'Утка', checked: false },
];

const sideTypes: FilterOption[] = [
    { id: 'potato', label: 'Картошка', checked: false },
    { id: 'buckwheat', label: 'Гречка', checked: false },
    { id: 'pasta', label: 'Паста', checked: false },
    { id: 'spaghetti', label: 'Спагетти', checked: false },
    { id: 'rice', label: 'Рис', checked: false },
    { id: 'cabbage', label: 'Капуста', checked: false },
    { id: 'beans', label: 'Фасоль', checked: false },
    { id: 'other', label: 'Другие овощи', checked: false },
];

const categories = menuMockData.map((category) => ({
    id: category.id.toString(),
    label: category.label,
    checked: false,
}));

const Filter = () => {
    const [categoryFilters, setCategoryFilters] = useState(categories);
    const [authorFilters, setAuthorFilters] = useState(authors);
    const [meatFilters, setMeatFilters] = useState(meatTypes);
    const [sideFilters, setSideFilters] = useState(sideTypes);
    const [isAllergensEnabled, setIsAllergensEnabled] = useState(false);

    const handleCategoryChange = (id: string) => {
        setCategoryFilters((prev) =>
            prev.map((filter) =>
                filter.id === id ? { ...filter, checked: !filter.checked } : filter,
            ),
        );
    };

    const handleAuthorChange = (id: string) => {
        setAuthorFilters((prev) =>
            prev.map((author) =>
                author.id === id ? { ...author, checked: !author.checked } : author,
            ),
        );
    };

    const handleMeatTypeChange = (id: string) => {
        setMeatFilters((prev) =>
            prev.map((filter) =>
                filter.id === id ? { ...filter, checked: !filter.checked } : filter,
            ),
        );
    };

    const handleSideTypeChange = (id: string) => {
        setSideFilters((prev) =>
            prev.map((filter) =>
                filter.id === id ? { ...filter, checked: !filter.checked } : filter,
            ),
        );
    };

    const handleClearAll = () => {
        setCategoryFilters((prev) => prev.map((filter) => ({ ...filter, checked: false })));
        setAuthorFilters((prev) => prev.map((author) => ({ ...author, checked: false })));
        setMeatFilters((prev) => prev.map((filter) => ({ ...filter, checked: false })));
        setSideFilters((prev) => prev.map((filter) => ({ ...filter, checked: false })));
        setIsAllergensEnabled(false);
    };

    const hasActiveFilters = () =>
        categoryFilters.some((f) => f.checked) ||
        authorFilters.some((f) => f.checked) ||
        meatFilters.some((f) => f.checked) ||
        sideFilters.some((f) => f.checked) ||
        isAllergensEnabled;

    const getSelectedItems = <T extends { checked: boolean }>(items: T[]): T[] =>
        items.filter((item) => item.checked);

    const getItemLabel = (item: FilterOption | Author): string =>
        'name' in item ? item.name : item.label;

    const getAllSelectedTags = () => {
        const categoryTags = getSelectedItems(categoryFilters);
        const authorTags = getSelectedItems(authorFilters);
        const meatTags = getSelectedItems(meatFilters);
        const sideTags = getSelectedItems(sideFilters);

        return [...categoryTags, ...authorTags, ...meatTags, ...sideTags];
    };

    return (
        <Flex direction='column' h='100vh'>
            <Box p={4} flex='1' overflowY='hidden'>
                <Flex justify='space-between' align='center' mb={4}>
                    <Text fontSize='24px' fontWeight='bold'>
                        Фильтр
                    </Text>
                </Flex>

                <Stack spacing={6}>
                    <Box>
                        <Menu closeOnSelect={false}>
                            <MenuButton
                                as={Button}
                                w='100%'
                                rightIcon={<ChevronDownIcon />}
                                textAlign='left'
                                bg='white'
                                borderWidth='1px'
                                _hover={{ bg: 'gray.50' }}
                            >
                                <Text color='blackAlpha.700'>Категория</Text>
                            </MenuButton>
                            <MenuList minW='247%'>
                                {categoryFilters.map((category, index) => (
                                    <MenuItem
                                        key={category.id}
                                        onClick={() => handleCategoryChange(category.id)}
                                        bg={index % 2 === 0 ? 'gray.50' : 'white'}
                                        _hover={{ bg: index % 2 === 0 ? 'gray.100' : 'gray.50' }}
                                    >
                                        <Checkbox
                                            sx={{
                                                '.chakra-checkbox__control': {
                                                    borderColor: 'customLime.400',
                                                    borderRadius: '2px',
                                                    _checked: {
                                                        bg: '#b1ff2e',
                                                        borderColor: '#b1ff2e',
                                                        color: 'black',
                                                        _hover: {
                                                            bg: '#b1ff2e',
                                                            borderColor: '#b1ff2e',
                                                        },
                                                    },
                                                },
                                            }}
                                            isChecked={category.checked}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleCategoryChange(category.id);
                                            }}
                                        >
                                            {category.label}
                                        </Checkbox>
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>

                    <Box>
                        <Menu closeOnSelect={false}>
                            <MenuButton
                                as={Button}
                                w='100%'
                                rightIcon={<ChevronDownIcon />}
                                textAlign='left'
                                bg='white'
                                borderWidth='1px'
                                _hover={{ bg: 'gray.50' }}
                            >
                                <Text color='blackAlpha.700'>Поиск по автору</Text>
                            </MenuButton>
                            <MenuList minW='156%'>
                                {authorFilters.map((author, index) => (
                                    <MenuItem
                                        key={author.id}
                                        onClick={() => handleAuthorChange(author.id)}
                                        bg={index % 2 === 0 ? 'gray.50' : 'white'}
                                        _hover={{ bg: index % 2 === 0 ? 'gray.100' : 'gray.50' }}
                                    >
                                        <Checkbox
                                            sx={{
                                                '.chakra-checkbox__control': {
                                                    borderColor: 'customLime.400',
                                                    borderRadius: '2px',
                                                    _checked: {
                                                        bg: '#b1ff2e',
                                                        borderColor: '#b1ff2e',
                                                        color: 'black',
                                                        _hover: {
                                                            bg: '#b1ff2e',
                                                            borderColor: '#b1ff2e',
                                                        },
                                                    },
                                                },
                                            }}
                                            isChecked={author.checked}
                                            onChange={(e) => {
                                                e.stopPropagation();
                                                handleAuthorChange(author.id);
                                            }}
                                        >
                                            {author.name}
                                        </Checkbox>
                                    </MenuItem>
                                ))}
                            </MenuList>
                        </Menu>
                    </Box>

                    <Box>
                        <Text mb={2} fontWeight='medium'>
                            Тип мяса
                        </Text>
                        <Stack>
                            {meatFilters.map((meat) => (
                                <Checkbox
                                    key={meat.id}
                                    isChecked={meat.checked}
                                    onChange={() => handleMeatTypeChange(meat.id)}
                                    border='1px solid customLime.400'
                                    sx={{
                                        '.chakra-checkbox__control': {
                                            borderColor: 'customLime.400',
                                            borderRadius: '2px',
                                            _checked: {
                                                bg: '#b1ff2e',
                                                borderColor: '#b1ff2e',
                                                color: 'black',
                                                _hover: {
                                                    bg: '#b1ff2e',
                                                    borderColor: '#b1ff2e',
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <Text fontSize='16px' fontWeight='500'>
                                        {meat.label}
                                    </Text>
                                </Checkbox>
                            ))}
                        </Stack>
                    </Box>

                    <Box>
                        <Text mb={2} fontWeight='medium'>
                            Тип гарнира
                        </Text>
                        <Stack>
                            {sideFilters.map((side) => (
                                <Checkbox
                                    key={side.id}
                                    isChecked={side.checked}
                                    onChange={() => handleSideTypeChange(side.id)}
                                    sx={{
                                        '.chakra-checkbox__control': {
                                            borderColor: 'customLime.400',
                                            borderRadius: '2px',
                                            _checked: {
                                                bg: '#b1ff2e',
                                                borderColor: '#b1ff2e',
                                                color: 'black',
                                                _hover: {
                                                    bg: '#b1ff2e',
                                                    borderColor: '#b1ff2e',
                                                },
                                            },
                                        },
                                    }}
                                >
                                    <Text fontSize='16px' fontWeight='500'>
                                        {side.label}
                                    </Text>
                                </Checkbox>
                            ))}
                        </Stack>
                    </Box>

                    <Box>
                        <Flex align='center' gap='12px'>
                            <Text fontWeight='medium'>Исключить аллергены</Text>
                            <Switch
                                isChecked={isAllergensEnabled}
                                onChange={() => setIsAllergensEnabled(!isAllergensEnabled)}
                                sx={{
                                    '& span[data-checked]': {
                                        backgroundColor: '#b1ff2e !important',
                                    },
                                    '& span[data-checked] span': {
                                        backgroundColor: 'white !important',
                                    },
                                }}
                            />
                        </Flex>
                        <Box mt={2}>
                            <AllergensSelect isEnabled={isAllergensEnabled} />
                        </Box>
                    </Box>
                </Stack>
            </Box>

            {getAllSelectedTags().length > 0 && (
                <Box p={4} borderTop='1px' borderColor='gray.200'>
                    <Flex gap={2} flexWrap='wrap'>
                        {getAllSelectedTags().map((item) => (
                            <Tag
                                key={item.id}
                                size='md'
                                borderRadius='6px'
                                variant='solid'
                                bg='#eaffc7'
                                border='1px solid #b1ff2e'
                            >
                                <TagLabel color='#207e00'>{getItemLabel(item)}</TagLabel>
                                <TagCloseButton
                                    color='#207e00'
                                    onClick={() => {
                                        if ('name' in item) {
                                            handleAuthorChange(item.id);
                                        } else if ('label' in item) {
                                            if (meatFilters.find((m) => m.id === item.id)) {
                                                handleMeatTypeChange(item.id);
                                            } else if (sideFilters.find((s) => s.id === item.id)) {
                                                handleSideTypeChange(item.id);
                                            } else {
                                                handleCategoryChange(item.id);
                                            }
                                        }
                                    }}
                                />
                            </Tag>
                        ))}
                    </Flex>
                </Box>
            )}

            <Flex p={4} justifyContent='center'>
                <Flex gap={4}>
                    <Button
                        onClick={handleClearAll}
                        bg='white'
                        alignSelf='center'
                        color='black'
                        border='1px solid black'
                    >
                        Очистить фильтр
                    </Button>

                    <Button
                        // w='full'
                        colorScheme='green'
                        bg='black'
                        color='white'
                        _hover={{ bg: 'customLime.500' }}
                        isDisabled={!hasActiveFilters()}
                        _disabled={{
                            bg: 'gray.100',
                            cursor: 'not-allowed',
                            _hover: { bg: 'gray.100' },
                        }}
                    >
                        Найти рецепт
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Filter;
