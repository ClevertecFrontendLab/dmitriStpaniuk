import { Button, Flex, Image, Text } from '@chakra-ui/react';

interface VeganCuisineListCardsProps {
    title: string;
    image: string;
    button: string;
}

const VeganCuisineListCards = ({ title, image, button }: VeganCuisineListCardsProps) => (
    <Flex
        gap={['9px', '9px', '9px', '9px', '9px']}
        justifyContent='space-between'
        alignItems='center'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
        px={['12px', '12px', '12px', '11px', '24px']}
        py={['11px', '11px', '11px', '9px', '11px']}
    >
        <Flex gap='9px' alignItems='center'>
            <Image w='24px' h='24px' src={image} alt={title} />
            <Text
                noOfLines={1}
                fontSize={['16px', '16px', '16px', '18px', '20px']}
                fontWeight={500}
                textAlign='left'
            >
                {title}
            </Text>
        </Flex>
        <Button
            color='customLime.600'
            border='1px solid #2db100'
            borderRadius='6px'
            variant='outline'
            size={['xs', 'xs', 'xs', 'xs', 'sm']}
            p={['12px', '14px', '12px', '15px', '']}
            minW={['70px', '70px', '70px', '70px', '87px']}
            maxW={['70px', '70px', '70px', '70px', '87px']}
        >
            {button}
        </Button>
    </Flex>
);

export default VeganCuisineListCards;
