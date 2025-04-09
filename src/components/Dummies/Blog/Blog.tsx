import { Flex, Text } from '@chakra-ui/react';

import BlogCard from '../BlogCard/BlogCard';

const Blog = () => (
    <Flex
        mb='40px'
        flexDirection='column'
        borderRadius='16px'
        bg='customLime.300'
        mt='40px'
        p='24px'
        gap={4}
    >
        <Text fontSize='36px' fontWeight='400' textAlign='left'>
            Кулинарные блоги
        </Text>
        <BlogCard />
    </Flex>
);

export default Blog;
