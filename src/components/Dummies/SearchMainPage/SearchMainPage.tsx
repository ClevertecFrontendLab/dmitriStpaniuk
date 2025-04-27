import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    Switch,
    Text,
    useBreakpointValue,
    useDisclosure,
} from '@chakra-ui/react';
import { KeyboardEvent, useState } from 'react';

import button from '~/assets/svg/main/button.svg';
import { setSearchQuery } from '~/store/app-slice';
import { useAppDispatch } from '~/store/hooks';

import Filter from '../Filter/Filter';
import AllergensSelect from './AllergensSelect';

const SearchMainPage = ({ data }: { data: { title: string; description: string } }) => {
    const [isAllergensEnabled, setIsAllergensEnabled] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const { isOpen, onOpen, onClose } = useDisclosure();
    const dispatch = useAppDispatch();

    const showFooter = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
        '2xl': true,
    });

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchInput(value);

        if (value.length >= 3) {
            dispatch(setSearchQuery(value));
        } else if (value.length === 0) {
            dispatch(setSearchQuery(''));
        }
    };

    const handleSearch = () => {
        if (searchInput.length >= 3) {
            dispatch(setSearchQuery(searchInput));
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && searchInput.length >= 3) {
            handleSearch();
        }
    };

    return (
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
            <Box
                w='75%'
                bg='white'
                borderRadius='24px'
                p={4}
                _focusWithin={{
                    boxShadow:
                        '0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                }}
                display='flex'
                flexDirection='column'
                alignItems='center'
            >
                <Heading
                    as='h1'
                    pb={['18px', '18px', '18px', '23px', '34px']}
                    pt={['16px', '22px', '22px', '30px', '31px']}
                    fontSize={['24px', '24px', '24px', '48px']}
                    fontWeight='700'
                    fontFamily='heading'
                    lineHeight='100%'
                    letterSpacing='0.02em'
                >
                    {data.title}
                </Heading>
                {data.description.length > 1 && (
                    <Text
                        mt='-22px'
                        mb={['16px', '16px', '16px', '32px', '32px']}
                        maxW='695px'
                        lineHeight='150%'
                        fontWeight='500'
                        fontSize={['14px', '14px', '14px', '16px', '16px']}
                        color='blackAlpha.600'
                        pt={['16px', '16px', '16px', '0px', '0px']}
                    >
                        {data.description}
                    </Text>
                )}

                <Stack
                    direction='row'
                    gap='12px'
                    pb='16px'
                    w={['328px', '328px', '448px', '518px', '518px']}
                >
                    <Image
                        data-test-id='filter-button'
                        w={['32px', '32px', '32px', '48px']}
                        src={button}
                        alt='button'
                        cursor='pointer'
                        onClick={onOpen}
                    />
                    <InputGroup size={['sm', 'sm', 'sm', 'lg']}>
                        <Input
                            data-test-id='search-input'
                            type='search'
                            placeholder='Название или ингредиент...'
                            borderColor='blackAlpha.300'
                            _placeholder={{ color: '#134b00' }}
                            _focus={{
                                boxShadow: 'none',
                                borderColor: 'blackAlpha.300',
                            }}
                            value={searchInput}
                            onChange={handleSearchChange}
                            onKeyDown={handleKeyDown}
                        />
                        <InputRightElement
                            width='4.5rem'
                            cursor={searchInput.length >= 3 ? 'pointer' : 'default'}
                            onClick={searchInput.length >= 3 ? handleSearch : undefined}
                        >
                            <SearchIcon
                                data-test-id='search-button'
                                color={searchInput.length >= 3 ? 'green.500' : 'gray.400'}
                            />
                        </InputRightElement>
                    </InputGroup>
                </Stack>

                {showFooter && (
                    <Flex
                        gap='16px'
                        justifyContent='space-between'
                        alignItems='center'
                        w={['328px', '328px', '448px', '518px', '518px']}
                    >
                        <FormControl display='flex' alignItems='center' w='50%'>
                            <FormLabel
                                id='allergies'
                                mb='0'
                                fontFamily='heading'
                                fontSize='16px'
                                fontWeight='500'
                            >
                                Исключить мои аллергены
                            </FormLabel>
                            <Switch
                                data-test-id='allergens-switcher'
                                id='allergies'
                                sx={{
                                    '& span[data-checked]': {
                                        backgroundColor: '#b1ff2e !important',
                                    },
                                    '& span[data-checked] span': {
                                        backgroundColor: 'white !important',
                                    },
                                }}
                                isChecked={isAllergensEnabled}
                                onChange={(e) => setIsAllergensEnabled(e.target.checked)}
                            />
                        </FormControl>
                        <Box flex='1'>
                            <AllergensSelect isEnabled={isAllergensEnabled} />
                        </Box>
                    </Flex>
                )}
            </Box>

            <Drawer
                data-test-id='filter-drawer'
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size='md'
                blockScrollOnMount={false}
            >
                <DrawerOverlay />
                <DrawerContent
                    // w={['263px', '263px', '463px', '463px', '463px']}
                    position='absolute'
                    top='0'
                    right='0'
                    h='100vh'
                    boxShadow='-4px 0 8px rgba(0, 0, 0, 0.1)'
                    sx={{
                        width: ['360px', '360px', '463px', '463px', '463px'],
                        maxWidth: ['360px', '360px', '463px', '463px', '463px'],
                    }}
                >
                    <DrawerCloseButton
                        data-test-id='close-filter-drawer'
                        top='20px'
                        right='24px'
                        size='sm'
                        color='white'
                        _hover={{ opacity: 0.7 }}
                        border='1px solid black'
                        backgroundColor='black'
                        borderRadius='50%'
                    />
                    <DrawerBody>
                        <Filter />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
};

export default SearchMainPage;
