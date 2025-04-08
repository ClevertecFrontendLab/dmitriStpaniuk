import { Flex } from '@chakra-ui/react';

import Blog from '~/components/Dummies/Blog/Blog';
import NewRecipe from '~/components/Dummies/NewRecipe/NewRecipe';
import { searchMainPageMockData } from '~/components/Dummies/SearchMainPage/constants';
import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';
import { Succulent } from '~/components/Dummies/Succulent/Succilent';
import VeganCuisine from '~/components/Dummies/VeganCuisine/VeganCuisine';
const Vegan = () => (
    <Flex
        flexDirection='column'
        w='100%'
        h='calc(100vh - 110px)'
        overflowY='auto'
        sx={{
            '&::-webkit-scrollbar': {
                display: 'none',
            },
            '-ms-overflow-style': 'none',
            scrollbarWidth: 'none',
        }}
    >
        <SearchMainPage data={searchMainPageMockData[1]} />
        {/* <NewRecipe />
        <Succulent />
        <Blog />
        <VeganCuisine /> */}
    </Flex>
);

export default Vegan;
