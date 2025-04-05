import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { newRecipeCardMockData } from './constants';

const NewRecipeCards = () => (
    <Flex flexDirection='column' alignItems='flex-start'>
        <Text
            pt='44px'
            fontFamily='heading'
            fontSize='48px'
            fontWeight='500'
            color='black'
            pb='10px'
            letterSpacing='0.045em'
        >
            Новые рецепты
        </Text>
        <Flex gap='22px'>
            {newRecipeCardMockData.map((item) => (
                <Box
                    key={item.id}
                    border='1px solid rgba(0, 0, 0, 0.08)'
                    borderRadius='8px'
                    w='25%'
                >
                    <Image src={item.image} alt='recipe' borderRadius='8px' />
                    <Flex flexDirection='column' alignItems='flex-start' p='16px 24px 20px'>
                        <Flex flexDirection='column' alignItems='flex-start' gap='8px'>
                            <Text
                                fontFamily='heading'
                                fontSize='20px'
                                fontWeight='500'
                                noOfLines={1}
                                textAlign='left'
                            >
                                {item.title}
                            </Text>
                            <Text
                                fontSize='14px'
                                fontWeight='400'
                                textAlign='left'
                                noOfLines={3}
                                lineHeight='143%'
                            >
                                {item.description}
                            </Text>
                        </Flex>
                        <Flex flexWrap='wrap' pt='24px' justifyContent='space-between' w='100%'>
                            {item.tags.map((tag) => (
                                <Flex
                                    key={tag.id}
                                    flexDirection='row'
                                    alignItems='center'
                                    bg='customLime.150'
                                    px='8px'
                                    py='2px'
                                    borderRadius='4px'
                                    gap='8px'
                                >
                                    <Image src={tag.icon} alt='tag' w='16px' h='16px' />
                                    <Text fontFamily='heading' fontSize='14px' fontWeight='400'>
                                        {tag.name}
                                    </Text>
                                </Flex>
                            ))}
                            <Flex gap='8px'>
                                {item.actives.map((active) => (
                                    <Flex
                                        key={active.id}
                                        flexDirection='row'
                                        alignItems='center'
                                        gap='8px'
                                    >
                                        <Image src={active.icon} alt='active' />
                                        <Text
                                            fontSize='14px'
                                            fontWeight='400'
                                            color='customLime.600'
                                        >
                                            {active.count}
                                        </Text>
                                    </Flex>
                                ))}
                            </Flex>
                        </Flex>
                    </Flex>
                </Box>
            ))}
        </Flex>
    </Flex>
);

export default NewRecipeCards;
