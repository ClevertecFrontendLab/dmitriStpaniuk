import { Button, Flex, Image, Text } from '@chakra-ui/react';

interface VeganCuisineListCardsProps {
    title: string;
    image: string;
    button: string;
}

const VeganCuisineListCards = ({ title, image, button }: VeganCuisineListCardsProps) => (
    <Flex
        gap='8px'
        justifyContent='space-between'
        alignItems='center'
        border='1px solid rgba(0, 0, 0, 0.08)'
        borderRadius='8px'
        p='12px 24px'
    >
        <Flex gap='8px' alignItems='center'>
            <Image w='24px' h='24px' src={image} alt={title} />
            <Text>{title}</Text>
        </Flex>
        <Button
            color='customLime.600'
            border='1px solid #2db100'
            borderRadius='8px'
            variant='outline'
            size='sm'
        >
            {button}
        </Button>
    </Flex>
);

export default VeganCuisineListCards;
