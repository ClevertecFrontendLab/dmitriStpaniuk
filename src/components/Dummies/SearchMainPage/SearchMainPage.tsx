import { SearchIcon } from '@chakra-ui/icons';
import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Select,
    Stack,
    Switch,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react';

import button from '~/assets/svg/main/button.svg';
const SearchMainPage = ({ data }: { data: { title: string; description: string } }) => {
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
                        borderColor='blackAlpha.600'
                    />
                    <InputRightElement width='4.5rem' cursor='pointer'>
                        <SearchIcon />
                    </InputRightElement>
                </InputGroup>
            </Stack>

            {showFooter && (
                <Flex
                    gap='16px'
                    justifyContent='space-between'
                    w={['328px', '448px', '518px', '518px']}
                >
                    <FormControl display='flex' alignItems='center'>
                        <FormLabel
                            id='allergies'
                            mb='0'
                            fontFamily='heading'
                            fontSize='16px'
                            fontWeight='500'
                            // pl='10px'
                        >
                            Исключить мои аллергены
                        </FormLabel>
                        <Switch id='allergies' />
                    </FormControl>
                    <Select placeholder='Выберите из списка...' w='86%'>
                        <option value='option1'>Option 1</option>
                    </Select>
                </Flex>
            )}
        </Flex>
    );
};

export default SearchMainPage;
