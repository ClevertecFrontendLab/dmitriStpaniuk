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
import { useEffect, useState } from 'react';

import { useFilters } from '~/store/hooks';

import AllergensSelect from '../SearchMainPage/AllergensSelect';
import { authors, categories, meatTypes, sideTypes } from './constants';

const categoriesOptions = categories.map((category) => ({
    id: category.id,
    label: category.label,
    checked: false,
    dataTestId: category.dataTestId,
}));

const Filter = () => {
    const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
    const [authorFilters, setAuthorFilters] = useState<string[]>([]);
    const [meatFilters, setMeatFilters] = useState<string[]>([]);
    const [sideFilters, setSideFilters] = useState<string[]>([]);
    const [isAllergensEnabled, setIsAllergensEnabled] = useState(false);
    const {
        filters,
        handleCategoriesChange,
        handleAuthorsChange,
        handleMeatTypesChange,
        handleSideTypesChange,
        handleAllergensEnabledChange,
    } = useFilters();

    useEffect(() => {
        handleCategoriesChange(categoryFilters);
        handleAuthorsChange(authorFilters);
        handleMeatTypesChange(meatFilters);
        handleSideTypesChange(sideFilters);
        handleAllergensEnabledChange(isAllergensEnabled);
    }, [
        categoryFilters,
        authorFilters,
        meatFilters,
        sideFilters,
        isAllergensEnabled,
        handleCategoriesChange,
        handleAuthorsChange,
        handleMeatTypesChange,
        handleSideTypesChange,
        handleAllergensEnabledChange,
    ]);

    const handleCategoryChange = (id: string) => {
        setCategoryFilters((prev) => {
            if (prev.includes(id)) {
                return prev.filter((filter) => filter !== id);
            }
            return [...prev, id];
        });
    };

    const handleAuthorChange = (id: string) => {
        setAuthorFilters((prev) => {
            if (prev.includes(id)) {
                return prev.filter((filter) => filter !== id);
            }
            return [...prev, id];
        });
    };

    const handleMeatTypeChange = (id: string) => {
        setMeatFilters((prev) => {
            if (prev.includes(id)) {
                return prev.filter((filter) => filter !== id);
            }
            return [...prev, id];
        });
    };

    const handleSideTypeChange = (id: string) => {
        setSideFilters((prev) => {
            if (prev.includes(id)) {
                return prev.filter((filter) => filter !== id);
            }
            return [...prev, id];
        });
    };

    const handleClearAll = () => {
        setCategoryFilters([]);
        setAuthorFilters([]);
        setMeatFilters([]);
        setSideFilters([]);
        setIsAllergensEnabled(false);
    };

    const hasActiveFilters = () =>
        categoryFilters.length > 0 ||
        authorFilters.length > 0 ||
        meatFilters.length > 0 ||
        sideFilters.length > 0 ||
        isAllergensEnabled;

    //  для  фильтра ID
    const getFilterLabel = (id: string, type: 'category' | 'author' | 'meat' | 'side'): string => {
        let result = id;

        switch (type) {
            case 'category': {
                const category = categories.find((c) => c.id === id);
                result = category ? category.label : id;
                break;
            }
            case 'author': {
                const author = authors.find((a) => a.id === id);
                result = author ? author.name : id;
                break;
            }
            case 'meat': {
                const meat = meatTypes.find((m) => m.id === id);
                result = meat ? meat.label : id;
                break;
            }
            case 'side': {
                const side = sideTypes.find((s) => s.id === id);
                result = side ? side.label : id;
                break;
            }
        }

        return result;
    };

    const getAllSelectedTags = () => {
        const result: {
            id: string;
            label: string;
            type: 'category' | 'author' | 'meat' | 'side';
        }[] = [];

        // категории
        filters.categories.forEach((id) => {
            result.push({ id, label: getFilterLabel(id, 'category'), type: 'category' });
        });

        // авторы
        filters.authors.forEach((id) => {
            result.push({ id, label: getFilterLabel(id, 'author'), type: 'author' });
        });

        // тип мяса
        filters.meatTypes.forEach((id) => {
            result.push({ id, label: getFilterLabel(id, 'meat'), type: 'meat' });
        });

        // тип гарнира
        filters.sideTypes.forEach((id) => {
            result.push({ id, label: getFilterLabel(id, 'side'), type: 'side' });
        });

        return result;
    };

    return (
        <Flex direction='column'>
            <Box p={4} flex='1'>
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
                                data-test-id='filter-menu-button-категория'
                            >
                                <Text color='blackAlpha.700'>Категория</Text>
                            </MenuButton>
                            <MenuList minW='247%'>
                                {categoriesOptions.map((category, index) => (
                                    <MenuItem
                                        key={category.id}
                                        onClick={() => handleCategoryChange(category.id)}
                                        bg={index % 2 === 0 ? 'gray.50' : 'white'}
                                        _hover={{ bg: index % 2 === 0 ? 'gray.100' : 'gray.50' }}
                                    >
                                        <Checkbox
                                            data-test-id={category.dataTestId}
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
                                            isChecked={categoryFilters.includes(category.id)}
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
                                {authors.map((author, index) => (
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
                                            isChecked={authorFilters.includes(author.id)}
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
                            {meatTypes.map((meat) => (
                                <Checkbox
                                    key={meat.id}
                                    isChecked={meatFilters.includes(meat.id)}
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
                            {sideTypes.map((side) => (
                                <Checkbox
                                    data-test-id={side.dataTestId}
                                    key={side.id}
                                    isChecked={sideFilters.includes(side.id)}
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
                                data-test-id='allergens-switcher-filter'
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
                            <AllergensSelect
                                isEnabled={isAllergensEnabled}
                                data-test-id='allergens-menu-button-filter'
                            />
                        </Box>
                    </Box>
                </Stack>
            </Box>

            {getAllSelectedTags().length > 0 && (
                <Box p={4} borderTop='1px' borderColor='gray.200'>
                    <Flex gap={2} flexWrap='wrap'>
                        {getAllSelectedTags().map((item) => (
                            <Tag
                                data-test-id='filter-tag'
                                key={item.id}
                                size='md'
                                borderRadius='6px'
                                variant='solid'
                                bg='#eaffc7'
                                border='1px solid #b1ff2e'
                            >
                                <TagLabel color='#207e00'>{item.label}</TagLabel>
                                <TagCloseButton
                                    color='#207e00'
                                    onClick={() => {
                                        switch (item.type) {
                                            case 'category':
                                                handleCategoryChange(item.id);
                                                break;
                                            case 'author':
                                                handleAuthorChange(item.id);
                                                break;
                                            case 'meat':
                                                handleMeatTypeChange(item.id);
                                                break;
                                            case 'side':
                                                handleSideTypeChange(item.id);
                                                break;
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
                        data-test-id='clear-filter-button'
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
                        data-test-id='find-recipe-button'
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
