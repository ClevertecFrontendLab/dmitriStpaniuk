import { Flex } from '@chakra-ui/react';

import Blog from '~/components/Dummies/Blog/Blog';
import NewRecipe from '~/components/Dummies/NewRecipe/NewRecipe';
import { searchMainPageMockData } from '~/components/Dummies/SearchMainPage/constants';
import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';
import { Succulent } from '~/components/Dummies/Succulent/Succilent';
import VeganCuisine from '~/components/Dummies/VeganCuisine/VeganCuisine';

const Main = () => (
    <Flex
        flexDirection='column'
        w='100%'
        h='calc(100vh - 80px)'
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
        <VeganCuisine />
    </Flex>
);

export default Main;
