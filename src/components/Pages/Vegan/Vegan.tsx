import { Flex } from '@chakra-ui/react';

import { searchMainPageMockData } from '~/components/Dummies/SearchMainPage/constants';
import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';
import VeganTabs from '~/components/Dummies/VeganTabs/VeganStabs';

const Vegan = () => (
    <Flex
        flexDirection='column'
        h={['calc(100vh - 160px)', 'calc(100vh - 160px)', 'calc(100vh - 160px)', '100vh', '100vh']}
        w='100%'
        // w='100vw'
        overflowY='auto'
        sx={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        }}
    >
        <SearchMainPage data={searchMainPageMockData[1]} />
        <VeganTabs />
    </Flex>
);

export default Vegan;
