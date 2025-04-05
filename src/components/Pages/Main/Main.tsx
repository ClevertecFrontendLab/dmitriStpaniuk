import { Flex } from '@chakra-ui/react';

import NewRecipeCards from '~/components/Dummies/NewRecipeCards/NewRecipeCards';
import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';
import { SucculentCards } from '~/components/Dummies/SucculentCards/SuccilentCards';

const Main = () => (
    <Flex flexDirection='column' w='100%'>
        <SearchMainPage />
        <NewRecipeCards />
        <SucculentCards />
    </Flex>
);

export default Main;
