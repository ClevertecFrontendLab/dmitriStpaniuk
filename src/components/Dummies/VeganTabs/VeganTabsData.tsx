import { Button, Flex, Text } from '@chakra-ui/react';

import {
    relevantKitchenMockData,
    relevantKitchenTitleDescriptionMockData,
} from '~/components/Pages/Vegan/constant';

import RelevantKitchen from '../RelevantKitchen/RelevantKitchen';
import SucculentCards from '../SucculentCards/SucculentCards';
import { veganCuisineListCardMockData } from '../VeganCuisineListCards/constants';
import { veganTabsCardsMockData } from './constants';

export const VeganTabsData = () => (
    <Flex flexDirection='column' alignItems='flex-start' position='relative' mt='24px'>
        <Flex
            flexWrap='wrap'
            justifyContent='space-between'
            gap={['11px', '11px', '16px', '14px', '14px']}
        >
            {veganTabsCardsMockData.map((item) => (
                <SucculentCards
                    key={item.id + item.title}
                    id={item.id.toString()}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    tags={item.tags}
                    actives={item.actives}
                    width={[
                        'calc(50% - 12px)',
                        '100%',
                        'calc(50% - 8px)',
                        '100%',
                        'calc(50% - 12px)',
                    ]}
                />
            ))}

            <Button
                bg='customLime.400'
                mt={['4px', '4px', '4px', '4px', '4px']}
                ml={['90px', '90px', '290px', '365px', '605px']}
                px={['16px', '16px', '16px', '16px', '17px']}
                py={['10px', '10px', '10px', '8px', '20px']}
            >
                <Text fontSize={['16px', '16px', '16px', '16px', '16px']} fontWeight='600'>
                    Загрузить еще
                </Text>
            </Button>
        </Flex>
        <Flex pt={['16px', '16px', '16px', '16px', '16px']}>
            <RelevantKitchen
                veganCuisineListCardMockData={veganCuisineListCardMockData}
                relevantKitchenMockData={relevantKitchenMockData}
                relevantKitchenTitleDescriptionMockData={relevantKitchenTitleDescriptionMockData}
            />
        </Flex>
    </Flex>
);
