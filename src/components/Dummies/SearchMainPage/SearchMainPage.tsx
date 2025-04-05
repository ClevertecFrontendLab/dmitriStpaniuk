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
} from '@chakra-ui/react';

import button from '~/assets/svg/main/button.svg';
const SearchMainPage = () => (
    <Flex flexDirection='column' alignSelf='center'>
        <Heading
            as='h1'
            pb='34px'
            fontSize='48px'
            fontWeight='700'
            fontFamily='heading'
            lineHeight='100%'
            letterSpacing='0.02em'
        >
            Приятного аппетита!
        </Heading>
        <Stack direction='row' gap='12px' pb='16px'>
            <Image src={button} alt='button' />
            <InputGroup size='lg'>
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
        <Flex gap='16px'>
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
    </Flex>
);

export default SearchMainPage;
