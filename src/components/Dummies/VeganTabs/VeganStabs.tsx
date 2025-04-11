import { Flex, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import { Tab } from '@chakra-ui/react';
import { Tabs } from '@chakra-ui/react';

import SucculentCards from '../SucculentCards/SucculentCards';
import { veganTabsCardsMockData, veganTabsMockData } from './constants';

const VeganTabs = () => (
    <Tabs mt='32px' align='center' variant='line' colorScheme='customLime' defaultIndex={2}>
        <TabList>
            {veganTabsMockData.map((tab) => (
                <Tab key={tab.id}>{tab.title}</Tab>
            ))}
        </TabList>
        {/* <TabIndicator mt='-1.5px' height='2px' bg=' #2db100' borderRadius='1px' /> */}
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
