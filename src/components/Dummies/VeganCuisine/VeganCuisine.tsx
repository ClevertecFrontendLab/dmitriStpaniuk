import { Flex, Text } from '@chakra-ui/react';

import { veganCuisineMockData } from '../VeganCuisineCard/constants';
import VeganCuisineCard from '../VeganCuisineCard/VeganCuisineCard';
import { veganCuisineListCardMockData } from '../VeganCuisineListCards/constants';
import VeganCuisineListCards from '../VeganCuisineListCards/VeganCuisineListCard';
const VeganCuisine = () => (
    <Flex flexDirection='column' borderTop='1px solid rgba(0, 0, 0, 0.08)'>
        <Flex alignItems='center' py='12px' >
            <Text fontSize='50px' fontWeight='500' w='51%' textAlign='left' >
                Веганская кухня
            </Text>
            <Text fontSize='16px' fontWeight='500' color='blackAlpha.700' w='49%' textAlign='left'>
                Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
                вегетарианскую диету и готовить вкусные вегетарианские блюда.
            </Text>
        </Flex>
        <Flex gap='24px' alignItems='center'>
            {veganCuisineMockData.map((card) => (
                <VeganCuisineCard
                    key={card.id}
                    title={card.title}
                    description={card.description}
                    tags={card.tags}
                    actives={card.actives}
                />
            ))}
            <Flex flexDirection='column' gap='12px' w=  '50%' >
            {veganCuisineListCardMockData.map((item) => (
                <VeganCuisineListCards
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    button={item.button}
                    />
                ))}
            </Flex>
        </Flex>
    </Flex>
);

export default VeganCuisine;
