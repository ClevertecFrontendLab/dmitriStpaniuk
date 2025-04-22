import { SearchIcon } from '@chakra-ui/icons';
import {
    Box,
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
} from '@chakra-ui/react';
import { useState } from 'react';

import button from '~/assets/svg/main/button.svg';

import AllergensSelect from './AllergensSelect';

const SearchMainPage = ({ data }: { data: { title: string; description: string } }) => {
    const [isAllergensEnabled, setIsAllergensEnabled] = useState(false);

    const showFooter = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: true,
        '2xl': true,
    });

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
                        w={['32px', '32px', '32px', '48px']}
                        src={button}
                        alt='button'
                        cursor='pointer'
                    />
                    <InputGroup size={['sm', 'sm', 'sm', 'lg']}>
                        <Input
                            type='search'
                            placeholder='Название или ингредиент...'
                            borderColor='blackAlpha.300'
                            _placeholder={{ color: 'gray.400' }}
                            _focus={{
                                boxShadow: 'none',
                                borderColor: 'blackAlpha.300',
                            }}
                        />
                        <InputRightElement width='4.5rem' cursor='pointer'>
                            <SearchIcon color='gray.400' />
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
                                id='allergies'
                                colorScheme='green'
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
        </Flex>
    );
};

export default SearchMainPage;
