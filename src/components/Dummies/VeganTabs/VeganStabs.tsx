import { Flex, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import { Tab, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { matchPath } from 'react-router';
import { useLocation, useNavigate } from 'react-router';

import { veganTabsMockData } from './constants';
import { VeganTabsData } from './VeganTabsData';

const VeganTabs = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const activeSubItem = matchPath(
        {
            path: '/:parent/:subItem',
            end: true,
        },
        location.pathname,
    );

    //  индекс вкладки при изменении URL
    useEffect(() => {
        const index = veganTabsMockData.findIndex(
            (tab) => tab.href.split('/').pop() === activeSubItem?.params.subItem,
        );

        if (index !== -1) {
            setActiveTabIndex(index);
        }
    }, [location.pathname, activeSubItem]);

    return (
        <Tabs
            mt='32px'
            align='center'
            variant='line'
            colorScheme='customLime'
            index={activeTabIndex}
            onChange={(index) => {
                const tabId = veganTabsMockData[index].href.split('/').pop();
                navigate(`/veganskaya-kuhnya/${tabId}`, { replace: true });
            }}
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
                position='relative'
                sx={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                <TabList margin='0 auto' minW='max-content'>
                    {veganTabsMockData.map((tab) => (
                        <Tab
                            onClick={() => {
                                const tabId = tab.href.split('/').pop();
                                navigate(`/veganskaya-kuhnya/${tabId}`, { replace: true });
                            }}
                            key={tab.id}
                            whiteSpace='nowrap'
                            style={
                                activeSubItem?.params.subItem === tab.href.slice(1)
                                    ? {
                                          color:
                                              tab.href.slice(1) === activeSubItem?.params.subItem
                                                  ? '#2db100'
                                                  : '#000',
                                          borderColor: '#2db100',
                                          fontWeight: '600',
                                      }
                                    : {}
                            }
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
                    <VeganTabsData />
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
};

export default VeganTabs;
