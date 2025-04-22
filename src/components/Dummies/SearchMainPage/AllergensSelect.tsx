import {
    Box,
    Checkbox,
    Flex,
    Input,
    Tag,
    TagCloseButton,
    TagLabel,
    useOutsideClick,
} from '@chakra-ui/react';
import { useRef, useState } from 'react';

interface Allergen {
    id: number;
    name: string;
    checked: boolean;
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
    const [allergens, setAllergens] = useState<Allergen[]>(initialAllergens);
    const [isOpen, setIsOpen] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const ref = useRef<HTMLDivElement>(null);

    useOutsideClick({
        ref: ref as React.RefObject<HTMLElement>,
        handler: () => setIsOpen(false),
    });

    const handleCheckboxChange = (id: number) => {
        setAllergens(
            allergens.map((allergen) =>
                allergen.id === id ? { ...allergen, checked: !allergen.checked } : allergen,
            ),
        );
    };

    const handleRemoveTag = (id: number) => {
        setAllergens(
            allergens.map((allergen) =>
                allergen.id === id ? { ...allergen, checked: false } : allergen,
            ),
        );
    };

    const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && inputValue.trim()) {
            const newAllergen = {
                id: allergens.length + 1,
                name: inputValue.trim(),
                checked: true,
            };
            setAllergens([...allergens, newAllergen]);
            setInputValue('');
        }
    };

    const selectedAllergens = allergens.filter((allergen) => allergen.checked);

    return (
        <Box position='relative' w='100%' ref={ref}>
            <Flex
                border='1px solid'
                borderColor='blackAlpha.300'
                borderRadius='md'
                p={2}
                onClick={() => isEnabled && setIsOpen(true)}
                cursor={isEnabled ? 'text' : 'not-allowed'}
                bg={isEnabled ? 'white' : 'gray.100'}
                flexWrap='wrap'
                gap={2}
                _focusWithin={{
                    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                {selectedAllergens.map((allergen) => (
                    <Tag
                        key={allergen.id}
                        size='sm'
                        borderRadius='full'
                        variant='solid'
                        bg='#b1ff2e'
                    >
                        <TagLabel fontSize='10px'>{allergen.name}</TagLabel>
                        <TagCloseButton
                            onClick={(e) => {
                                e.stopPropagation();
                                handleRemoveTag(allergen.id);
                            }}
                        />
                    </Tag>
                ))}
                <Input
                    placeholder={selectedAllergens.length === 0 ? 'Выберите из списка...' : ''}
                    border='none'
                    _focus={{ border: 'none', boxShadow: 'none' }}
                    flex='1'
                    minW='100px'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    isDisabled={!isEnabled}
                    fontSize='14px'
                    _placeholder={{ color: 'gray.400' }}
                    onClick={() => isEnabled && setIsOpen(true)}
                />
            </Flex>

            {isOpen && isEnabled && (
                <Box
                    position='absolute'
                    top='100%'
                    left='0'
                    right='0'
                    mt={2}
                    bg='white'
                    borderRadius='md'
                    boxShadow='lg'
                    zIndex={10}
                    maxH='300px'
                    overflowY='auto'
                >
                    <Flex p={2} borderBottom='1px solid' borderColor='gray.100'>
                        <Input
                            placeholder='кунжут'
                            size='sm'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={handleInputKeyDown}
                            borderRadius='md'
                            _placeholder={{ color: 'gray.400' }}
                            _focus={{
                                borderColor: 'blackAlpha.300',
                                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
                            }}
                        />
                    </Flex>
                    {allergens
                        .filter((allergen) =>
                            allergen.name.toLowerCase().includes(inputValue.toLowerCase()),
                        )
                        .map((allergen) => (
                            <Checkbox
                                key={allergen.id}
                                isChecked={allergen.checked}
                                onChange={() => handleCheckboxChange(allergen.id)}
                                p={2}
                                w='100%'
                                colorScheme='green'
                            >
                                {allergen.name}
                            </Checkbox>
                        ))}
                </Box>
            )}
        </Box>
    );
};

export default AllergensSelect;
