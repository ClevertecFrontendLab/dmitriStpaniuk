import { Button, Flex, TabList, TabPanel, TabPanels, Text } from '@chakra-ui/react';
import { Tab } from '@chakra-ui/react';
import { Tabs } from '@chakra-ui/react';

import {
    relevantKitchenMockData,
    relevantKitchenTitleDescriptionMockData,
    veganCuisineListCardMockData,
} from '~/components/Pages/Vegan/constant';

import RelevantKitchen from '../RelevantKitchen/RelevantKitchen';
import SucculentCards from '../SucculentCards/SucculentCards';
import { veganTabsCardsMockData, veganTabsMockData } from './constants';

const VeganTabs = () => (
    <Tabs
        mt='32px'
        align='center'
        variant='line'
        colorScheme='customLime'
        defaultIndex={2}
        w='100%'
        sx={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        }}
    >
        <Flex
            overflowX='auto'
            w='100%'
            justifyContent='center'
            sx={{
                '&::-webkit-scrollbar': {
                    display: 'none',
                },
                msOverflowStyle: 'none',
                scrollbarWidth: 'none',
            }}
        >
            <TabList>
                {veganTabsMockData.map((tab) => (
                    <Tab
                        key={tab.id}
                        whiteSpace='nowrap'
                        _selected={{
                            color: '#2db100',
                            borderColor: '#2db100',
                            fontWeight: '600',
                        }}
                    >
                        {tab.title}
                    </Tab>
                ))}
            </TabList>
        </Flex>

        <TabPanels>
            <TabPanel>
                <p>закуски!</p>
            </TabPanel>
            <TabPanel>
                <p>первые блюда!</p>
            </TabPanel>
            <TabPanel p={['0px']}>
                <Flex flexDirection='column' alignItems='flex-start' position='relative' mt='24px'>
                    <Flex
                        flexWrap='wrap'
                        justifyContent='space-between'
                        gap={['11px', '11px', '16px', '14px', '14px']}
                    >
                        {veganTabsCardsMockData.map((item) => (
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
                            <Text
                                fontSize={['16px', '16px', '16px', '16px', '16px']}
                                fontWeight='600'
                            >
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
            </TabPanel>
            <TabPanel>
                <p>гарниры!</p>
            </TabPanel>
            <TabPanel>
                <p>десерты!</p>
            </TabPanel>
            <TabPanel>
                <p>выпечка!</p>
            </TabPanel>
            <TabPanel>
                <p>сыроедческие блюда!</p>
            </TabPanel>
            <TabPanel>
                <p>напитки!</p>
            </TabPanel>
        </TabPanels>
    </Tabs>
);

export default VeganTabs;
