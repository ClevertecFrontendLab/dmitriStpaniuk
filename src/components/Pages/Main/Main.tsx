import { Flex } from '@chakra-ui/react';

import Blog from '~/components/Dummies/Blog/Blog';
import NewRecipe from '~/components/Dummies/NewRecipe/NewRecipe';
import RelevantKitchen from '~/components/Dummies/RelevantKitchen/RelevantKitchen';
import { searchMainPageMockData } from '~/components/Dummies/SearchMainPage/constants';
import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';
import { Succulent } from '~/components/Dummies/Succulent/Succilent';
import { veganCuisineListCardMockData } from '~/components/Dummies/VeganCuisineListCards/constants';

import { relevantKitchenMockData, relevantKitchenTitleDescriptionMockData } from './constants';

const Main = () => (
    <Flex
        flexDirection='column'
        w='100%'
        h={[
            'calc(100vh - 164px)',
            'calc(100vh - 148px)',
            'calc(100vh - 148px)',
            'calc(100vh )',
            'calc(100vh)',
        ]}
        pb={['16px', '16px', '16px', '0px', '0px']}
        overflowY='auto'
        sx={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
        }}
    >
        <SearchMainPage data={searchMainPageMockData[0]} />
        <NewRecipe />
        <Succulent />
        <Blog />
        <RelevantKitchen
            veganCuisineListCardMockData={veganCuisineListCardMockData}
            relevantKitchenMockData={relevantKitchenMockData}
            relevantKitchenTitleDescriptionMockData={relevantKitchenTitleDescriptionMockData}
        />
    </Flex>
);

export default Main;
