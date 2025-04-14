import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

import avatarImage from '~/assets/images/avatar.png';

export const CardAvatar = () => (
    <Box>
        <Flex gap='12px'>
            <Avatar name='Екатерина Константинопольская' src={avatarImage} />
            <Flex flexDir='column' alignItems='start'>
                <Text
                    fontFamily='heading'
                    fontSize='18px'
                    fontWeight='500'
                    lineHeight='27px'
                    style={{ letterSpacing: '0.004em' }}
                >
                    Екатерина Константинопольская
                </Text>
                <Text
                    fontFamily='heading'
                    fontSize='14px'
                    fontWeight='400'
                    color='rgba(0, 0, 0, 0.64)'
                >
                    @bake_and_pie
                </Text>
            </Flex>
        </Flex>
    </Box>
);
