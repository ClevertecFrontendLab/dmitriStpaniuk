import { Button, Flex, Text } from '@chakra-ui/react';

import RelevantKitchen from '~/components/Dummies/RelevantKitchen/RelevantKitchen';
import { searchMainPageMockData } from '~/components/Dummies/SearchMainPage/constants';
import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';
import SucculentCards from '~/components/Dummies/SucculentCards/SucculentCards';

import {
    relevantKitchenMockData,
    relevantKitchenTitleDescriptionMockData,
    succulentCardsMockData,
    veganCuisineListCardMockData,
} from './constant';

const Succulent = () => (
    <Flex
        flexDirection='column'
        h='calc(100vh - 80px)'
        w='100%'
        overflowY='auto'
        sx={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        }}
    >
        <SearchMainPage data={searchMainPageMockData[2]} />
        <Flex flexDirection='column' alignItems='flex-start' position='relative' mt='24px'>
            <Flex
                flexWrap='wrap'
                justifyContent='space-between'
                gap={['11px', '11px', '16px', '14px', '14px']}
            >
                {succulentCardsMockData.map((item) => (
                    <SucculentCards
                        key={item.id + item.title}
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
                    ml={['16px', '16px', '16px', '16px', '605px']}
                    px={['16px', '16px', '16px', '16px', '17px']}
                    py={['10px', '10px', '10px', '8px', '20px']}
                >
                    <Text fontSize={['16px', '16px', '16px', '16px', '16px']} fontWeight='600'>
                        Загрузить еще
                    </Text>
                </Button>
                <Flex pt={['16px', '16px', '16px', '16px', '16px']}>
                    <RelevantKitchen
                        veganCuisineListCardMockData={veganCuisineListCardMockData}
                        relevantKitchenMockData={relevantKitchenMockData}
                        relevantKitchenTitleDescriptionMockData={
                            relevantKitchenTitleDescriptionMockData
                        }
                    />
                </Flex>
            </Flex>
        </Flex>
    </Flex>
);

export default Succulent;
