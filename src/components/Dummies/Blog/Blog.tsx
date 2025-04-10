import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Button, Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import BlogCard from '../BlogCard/BlogCard';
import { blogMockData } from './constants';

const Blog = () => {
    const absoluteButton = useBreakpointValue({
        base: true,
        sm: true,
        md: true,
        lg: false,
        xl: false,
        '2xl': false,
    });
    const is360 = useBreakpointValue({
        base: true,
        sm: true,
        md: false,
        lg: false,
        xl: false,
        '2xl': false,
    });

    return (
        <Flex
            position='relative'
            flexDirection='column'
            borderRadius='16px'
            bg='customLime.300'
            mb={['40px', '33px', '30px', '40px', '40px']}
            mt={['40px', '82px', '83px', '40px', '40px']}
            gap={['9px', '9px', '9px', '14px', '26px']}
            px={['12px', '12px', '12px', '24px', '24px']}
            pt={['12px', '12px', '12px', '21px', '15px']}
            pb={['15px', '62px', '64px', '26px', '25px']}
        >
            <Flex justifyContent='space-between' alignItems='center'>
                <Text
                    fontSize={['24px', '24px', '24px', '30px', '36px']}
                    fontWeight='400'
                    textAlign='left'
                    letterSpacing={['0.03em', '0.03em', '0.03em', '0.04em', '0.04em']}
                >
                    Кулинарные блоги
                </Text>

                <Button
                    variant='outline'
                    size='sm'
                    rightIcon={<ArrowForwardIcon />}
                    px='16px'
                    border='none'
                    position={absoluteButton ? 'absolute' : 'relative'}
                    top={absoluteButton ? ['8px', '554px', '225px', '8px', '8px'] : 'auto'}
                    left={absoluteButton ? ['8px', '90px', '290px', '8px', '8px'] : 'auto'}
                >
                    <Text
                        fontSize={['16px', '16px', '16px', '16px', '18px']}
                        fontWeight='600'
                        textAlign='left'
                    >
                        Все авторы
                    </Text>
                </Button>
            </Flex>
            <Flex
                gap={['16px', '11px', '12px', '16px', '16px']}
                flexDirection={is360 ? 'column' : 'row'}
            >
                {blogMockData.map((item) => (
                    <BlogCard
                        key={item.id + item.author}
                        image={item.image}
                        author={item.author}
                        telegram={item.telegram}
                        description={item.description}
                    />
                ))}
            </Flex>
        </Flex>
    );
};

export default Blog;
