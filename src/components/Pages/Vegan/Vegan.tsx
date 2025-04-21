import { Flex } from '@chakra-ui/react';

import SearchMainPage from '~/components/Dummies/SearchMainPage/SearchMainPage';
import VeganTabs from '~/components/Dummies/VeganTabs/VeganStabs';

const Vegan = ({
    headerText,
    tabs,
    parentHref,
}: {
    headerText: string;
    tabs: { id: number; label: string; href: string }[];
    parentHref: string;
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
        <VeganTabs tabs={tabs} parentHref={parentHref} />
    </Flex>
);

export default Vegan;
