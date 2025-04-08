import { Flex, Image, Text } from '@chakra-ui/react';

import { blogMockData } from '../Blog/constants';

const BlogCard = () => (
    <Flex gap='16px' >
        {blogMockData.map((item) => (
            <Flex bg='white' key={item.id} p='24px' flexDirection='column' borderRadius='8px' border='1px solid rgba(0, 0, 0, 0.08)'>
                <Flex  gap='12px'>
                    <Image src={item.image} alt={item.author} />
                    <Flex flexDirection='column'>
                        <Text fontSize='18px' fontWeight='500' textAlign='left'>
                            {item.author}
                        </Text>
                        <Text fontSize='14px' color='blackAlpha.700' fontWeight='400' textAlign='left'>
                            {item.telegram}
                        </Text>
                    </Flex>
                </Flex>
                <Text fontSize='14px' fontWeight='400' textAlign='left' pt='24px'>
                    {item.description}
                </Text>
            </Flex>
        ))}
    </Flex>
);

export default BlogCard;
