import { AddIcon, ChevronDownIcon, CloseIcon } from '@chakra-ui/icons';
import {
    Box,
    Button,
    Checkbox,
    Flex,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Tag,
    TagLabel,
    Text,
} from '@chakra-ui/react';
import { useEffect, useMemo, useRef, useState } from 'react';

import { setSelectedAllergens } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

interface Allergen {
    id: number;
    name: string;
    checked: boolean;
    isCustom?: boolean;
}

const initialAllergens: Allergen[] = [
    { id: 1, name: 'Молочные продукты', checked: false },
    { id: 2, name: 'Яйцо', checked: false },
    { id: 3, name: 'Рыба', checked: false },
    { id: 4, name: 'Моллюски', checked: false },
    { id: 5, name: 'Орехи', checked: false },
    { id: 6, name: 'Томат (помидор)', checked: false },
    { id: 7, name: 'Цитрусовые', checked: false },
    { id: 8, name: 'Клубника (ягоды)', checked: false },
    { id: 9, name: 'Шоколад', checked: false },
];

interface AllergensSelectProps {
    isEnabled: boolean;
}

const AllergensSelect = ({ isEnabled }: AllergensSelectProps) => {
    const dispatch = useAppDispatch();
    const [allergens, setAllergens] = useState<Allergen[]>(initialAllergens);
    const [customAllergens, setCustomAllergens] = useState<Allergen[]>([]);
    const [inputValue, setInputValue] = useState('');
    const menuRef = useRef<HTMLDivElement>(null);

    const selectedAllergens = useMemo(
        () => [...allergens.filter((allergen) => allergen.checked), ...customAllergens],
        [allergens, customAllergens],
    );

    const handleCheckboxChange = (id: number) => {
        setAllergens((prevAllergens) =>
            prevAllergens.map((allergen) =>
                allergen.id === id ? { ...allergen, checked: !allergen.checked } : allergen,
            ),
        );
    };

    const handleAddCustomAllergen = () => {
        if (inputValue.trim()) {
            const newAllergen: Allergen = {
                id: Date.now(),
                name: inputValue.trim(),
                checked: true,
                isCustom: true,
            };
            setCustomAllergens((prev) => [...prev, newAllergen]);
            setInputValue('');
        }
    };

    const handleClearAll = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setAllergens((prevAllergens) =>
            prevAllergens.map((allergen) => ({ ...allergen, checked: false })),
        );
        setCustomAllergens([]);
    };

    useEffect(() => {
        dispatch(setSelectedAllergens(selectedAllergens));
    }, [selectedAllergens, dispatch]);

    useEffect(() => {
        if (!isEnabled) {
            setAllergens((prevAllergens) =>
                prevAllergens.map((allergen) => ({ ...allergen, checked: false })),
            );
            setCustomAllergens([]);
        }
    }, [isEnabled]);

    return (
        <Box position='relative' w='100%' ref={menuRef}>
            <Menu closeOnSelect={false} gutter={1}>
                {({ isOpen: _isOpen }) => (
                    <>
                        <MenuButton
                            as={Button}
                            rightIcon={
                                selectedAllergens.length > 0 ? (
                                    <Flex gap={2} alignItems='center'>
                                        <Box
                                            as='span'
                                            cursor='pointer'
                                            onClick={handleClearAll}
                                            _hover={{ opacity: 0.7 }}
                                            display='flex'
                                            alignItems='center'
                                        >
                                            <CloseIcon boxSize={3} color='gray.500' />
                                        </Box>
                                        <ChevronDownIcon />
                                    </Flex>
                                ) : (
                                    <ChevronDownIcon />
                                )
                            }
                            w='100%'
                            isDisabled={!isEnabled}
                            bg={isEnabled ? 'white' : 'gray.100'}
                            _hover={{ bg: isEnabled ? 'gray.50' : 'gray.100' }}
                            borderWidth='1px'
                            borderColor='customLime.400'
                            h='auto'
                            py={2}
                            px={4}
                        >
                            <Flex flexWrap='wrap' gap={2} alignItems='center' w='100%'>
                                {selectedAllergens.length === 0 ? (
                                    <Box color='gray.400' fontSize='14px'>
                                        Выберите из списка...
                                    </Box>
                                ) : (
                                    selectedAllergens.map((allergen) => (
                                        <Tag
                                            key={allergen.id}
                                            size='sm'
                                            borderRadius='6px'
                                            border='1px solid'
                                            borderColor='customLime.400'
                                            variant='solid'
                                            bg='white'
                                        >
                                            <TagLabel
                                                color='customLime.600'
                                                fontSize='12px'
                                                fontWeight='500'
                                            >
                                                {allergen.name}
                                            </TagLabel>
                                        </Tag>
                                    ))
                                )}
                            </Flex>
                        </MenuButton>
                        <MenuList zIndex={1500} position='relative' w='82%' maxW='100%'>
                            {allergens.map((allergen, index) => (
                                <MenuItem
                                    key={allergen.id}
                                    onClick={() => handleCheckboxChange(allergen.id)}
                                    bg={index % 2 === 0 ? 'gray.50' : 'white'}
                                    _hover={{ bg: index % 2 === 0 ? 'gray.100' : 'gray.50' }}
                                >
                                    <Checkbox
                                        isChecked={allergen.checked}
                                        size='md'
                                        w='100%'
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
                                        onChange={(e) => {
                                            e.stopPropagation();
                                            handleCheckboxChange(allergen.id);
                                        }}
                                    >
                                        <Text color='blackAlpha.700'>{allergen.name}</Text>
                                    </Checkbox>
                                </MenuItem>
                            ))}
                            <Box p={3} borderTop='1px' borderColor='gray.200'>
                                <Flex gap={2}>
                                    <Input
                                        placeholder='Добавить свой аллерген'
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                e.preventDefault();
                                                handleAddCustomAllergen();
                                            }
                                        }}
                                        size='sm'
                                    />
                                    <Button
                                        size='sm'
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAddCustomAllergen();
                                        }}
                                        colorScheme='green'
                                        variant='ghost'
                                    >
                                        <AddIcon />
                                    </Button>
                                </Flex>
                            </Box>
                        </MenuList>
                    </>
                )}
            </Menu>
        </Box>
    );
};

export default AllergensSelect;
