import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import { veganCuisineMockData } from '../VeganCuisineCard/constants';
import VeganCuisineCard from '../VeganCuisineCard/VeganCuisineCard';
import { veganCuisineListCardMockData } from '../VeganCuisineListCards/constants';
import VeganCuisineListCards from '../VeganCuisineListCards/VeganCuisineListCard';
const VeganCuisine = () => {
    const is1440 = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: false,
        '2xl': false,
    });
    return (
        <Flex flexDirection={['column']} borderTop='1px solid rgba(0, 0, 0, 0.08)'>
            <Flex
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']}
                pb={['12px', '15px', '16px', '24px', '12px']}
                pt={['10px', '10px', '10px', '22px', '10px']}
                justifyContent='space-between'
            >
                <Text
                    fontSize={['24px', '24px', '24px', '36px', '48px']}
                    fontWeight='500'
                    textAlign='left'
                    letterSpacing='0.03em'
                    lineHeight='111%'
                    pb={['10px', '10px', '12px', '0', '0']}
                >
                    Веганская {is1440 ? <br /> : ''} кухня
                </Text>
                <Text
                    fontSize={['14px', '14px', '14px', '16px', '16px']}
                    fontWeight='500'
                    color='blackAlpha.700'
                    w={['100%', '100%', '100%', '65%', '49%']}
                    textAlign='left'
                >
                    Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                    вегетарианскую диету и готовить вкусные вегетарианские блюда.
                </Text>
            </Flex>
            <Flex
                gap={['16px', '14px', '12px', '16px', '24px']}
                alignItems='center'
                flexDirection={['column', 'column', 'row', 'row', 'row']}
            >
                {veganCuisineMockData.map((card) => (
                    <VeganCuisineCard
                        key={card.id}
                        title={card.title}
                        description={card.description}
                        tags={card.tags}
                        actives={card.actives}
                    />
                ))}
                <Flex flexDirection='column' gap={['12px', '10px', '8px', '12px', '12px']} w='100%'>
                    {veganCuisineListCardMockData.map((item) => (
                        <VeganCuisineListCards
                            key={item.id + 'list'}
                            title={item.title}
                            image={item.image}
                            button={item.button}
                        />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default VeganCuisine;
