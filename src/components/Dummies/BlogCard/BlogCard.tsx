import { Flex, Image, Text } from '@chakra-ui/react';

interface BlogCardProps {
    image: string;
    author: string;
    telegram: string;
    description: string;
}

const BlogCard = ({ image, author, telegram, description }: BlogCardProps) => (
    <Flex
        bg='white'
        p={['16px', '16px', '16px', '16px', '23px']}
        flexDirection='column'
        borderRadius='8px'
        border='1px solid rgba(0, 0, 0, 0.08)'
    >
        <Flex gap={['7px', '7px', '7px', '12px', '12px']} alignItems='center'>
            <Image h={['32px', '32px', '32px', '48px', '48px']} src={image} alt={author} />
            <Flex flexDirection='column'>
                <Text
                    fontSize={['16px', '16px', '16px', '18px', '18px']}
                    fontWeight='500'
                    textAlign='left'
                    noOfLines={1}
                >
                    {author}
                </Text>
                <Text
                    fontSize={['12px', '12px', '12px', '14px', '14px']}
                    color='blackAlpha.700'
                    fontWeight='400'
                    textAlign='left'
                >
                    {telegram}
                </Text>
            </Flex>
        </Flex>
        <Text
            noOfLines={3}
            fontSize='14px'
            fontWeight='400'
            textAlign='left'
            pt={['14px', '14px', '14px', '14px', '24px']}
        >
            {description}
        </Text>
    </Flex>
);

export default BlogCard;
