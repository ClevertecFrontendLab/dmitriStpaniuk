import { Flex, Text, useBreakpointValue } from '@chakra-ui/react';

import VeganCuisineCard from '../VeganCuisineCard/VeganCuisineCard';
import VeganCuisineListCards from '../VeganCuisineListCards/VeganCuisineListCard';

type RelevantKitchenMockData = {
    id: number;
    title: string;
    description: string;
    tags: { id: number; icon: string; name: string }[];
    actives: { id: number; icon: string; count: number }[];
};

type RelevantKitchenTitleDescriptionMockData = {
    title: string;
    description: string;
};

type VeganCuisineListCardMockData = {
    id: number;
    image: string;
    title: string;
    button: string;
};

type RelevantKitchenProps = {
    relevantKitchenMockData: RelevantKitchenMockData[];
    relevantKitchenTitleDescriptionMockData: RelevantKitchenTitleDescriptionMockData;
    veganCuisineListCardMockData: VeganCuisineListCardMockData[];
};

const RelevantKitchen = ({
    relevantKitchenMockData,
    relevantKitchenTitleDescriptionMockData,
    veganCuisineListCardMockData,
}: RelevantKitchenProps) => {
    const is1440 = useBreakpointValue({
        base: false,
        sm: false,
        md: false,
        lg: true,
        xl: false,
        '2xl': false,
    });

    // Разделяем заголовок на два слова
    const titleWords = relevantKitchenTitleDescriptionMockData.title.split(' ');
    const firstWord = titleWords[0] || '';
    const secondWord = titleWords[1] || '';

    return (
        <Flex flexDirection={['column']} borderTop='1px solid rgba(0, 0, 0, 0.08)'>
            <Flex
                flexDirection={['column', 'column', 'column', 'row', 'row']}
                alignItems={['flex-start', 'flex-start', 'flex-start', 'flex-start', 'center']}
                pb={['12px', '15px', '16px', '24px', '22px']}
                pt={['10px', '10px', '10px', '22px', '18px']}
                justifyContent='space-between'
            >
                <Text
                    fontSize={['24px', '24px', '24px', '36px', '48px']}
                    fontWeight='500'
                    textAlign='left'
                    letterSpacing='0.03em'
                    lineHeight='111%'
                    pb={['10px', '10px', '12px', '0', '0']}
                >
                    {firstWord}
                    {is1440 ? <br /> : ' '}
                    {secondWord}
                </Text>
                <Text
                    fontSize={['14px', '14px', '14px', '16px', '16px']}
                    fontWeight='500'
                    color='blackAlpha.700'
                    w={['100%', '100%', '100%', '65%', '49%']}
                    textAlign='left'
                >
                    {relevantKitchenTitleDescriptionMockData.description}
                </Text>
            </Flex>
            <Flex
                gap={['16px', '14px', '12px', '16px', '24px']}
                alignItems='center'
                flexDirection={['column', 'column', 'row', 'row', 'row']}
            >
                {relevantKitchenMockData.map((card) => (
                    <VeganCuisineCard
                        key={card.title + card.description}
                        title={card.title}
                        description={card.description}
                        tags={card.tags}
                        actives={card.actives}
                    />
                ))}
                <Flex flexDirection='column' gap={['12px', '10px', '8px', '12px', '12px']} w='100%'>
                    {veganCuisineListCardMockData.map((item) => (
                        <VeganCuisineListCards
                            key={item.title + item.image}
                            title={item.title}
                            image={item.image}
                            button={item.button}
                        />
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default RelevantKitchen;
