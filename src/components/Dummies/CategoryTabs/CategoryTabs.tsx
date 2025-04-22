import { Flex, TabList, TabPanel, TabPanels } from '@chakra-ui/react';
import { Tab, Tabs } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { matchPath } from 'react-router';
import { useLocation, useNavigate } from 'react-router';

import type { SliderMockData } from '~/components/Dummies/NewRecipe/newRecipe.d';

import { CategoryTabsData } from './CategoryTabsData';

const CategoryTabs = ({
    tabs,
    parentHref,
    categoryData,
}: {
    tabs: { id: number; label: string; href: string }[];
    parentHref: string;
    categoryData: SliderMockData[];
}) => {
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
        const index = tabs.findIndex(
            (tab) => tab.href.split('/').pop() === activeSubItem?.params.subItem,
        );

        if (index !== -1) {
            setActiveTabIndex(index);
        }
    }, [location.pathname, activeSubItem, tabs]);

    return (
        <Tabs
            mt='32px'
            align='center'
            variant='line'
            colorScheme='customLime'
            index={activeTabIndex}
            onChange={(index) => {
                const tabId = tabs[index].href.split('/').pop();
                navigate(`${parentHref}/${tabId}`, { replace: true });
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
                justifyContent='center'
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
                <TabList>
                    {tabs.map((tab) => {
                        // при отсутствии активной вкладки, снять фон, ни хера не работает
                        const isActive = location.pathname === `${parentHref}${tab.href}`;
                        return (
                            <Tab
                                onClick={() => {
                                    const tabId = tab.href.split('/').pop();
                                    navigate(`${parentHref}/${tabId}`, { replace: true });
                                }}
                                key={tab.id}
                                whiteSpace='nowrap'
                                style={
                                    isActive
                                        ? {
                                              color: '#2db100',
                                              borderColor: '#2db100',
                                              fontWeight: '600',
                                          }
                                        : {}
                                }
                            >
                                {tab.label}
                            </Tab>
                        );
                    })}
                </TabList>
            </Flex>
            <TabPanels>
                {tabs.map((tab) => (
                    <TabPanel key={tab.id} p={['0px']}>
                        <CategoryTabsData categoryData={categoryData} />
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    );
};

export default CategoryTabs;
