import { Flex } from '@chakra-ui/react';

import CategoryTabs from '~/components/Dummies/CategoryTabs/CategoryTabs';
import type { SliderMockData } from '~/components/Dummies/NewRecipe/newRecipe.d';
import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';

const CategoryPage = ({
    headerText,
    tabs,
    parentHref,
    categoryData,
}: {
    headerText: string;
    tabs: { id: number; label: string; href: string }[];
    parentHref: string;
    categoryData: SliderMockData[];
}) => (
    <Flex
        flexDirection='column'
        h={[
            ' calc(100vh - 150px)',
            ' calc(100vh - 150px)',
            ' calc(100vh - 150px)',
            ' calc(100vh - 81px)',
            ' calc(100vh - 80px)',
        ]}
        w='100%'
    >
        <SearchMainPage data={{ title: headerText, description: '' }} />
        <CategoryTabs tabs={tabs} parentHref={parentHref} categoryData={categoryData} />
    </Flex>
);

export default CategoryPage;
