import { Box, Center, Flex, useBreakpointValue } from '@chakra-ui/react';

export const Header = () => {
    const headerHeight = useBreakpointValue({
        base: '64px',
        md: '64px',
        lg: '80px',
        xl: '80px',
    });

    const headerWidth = useBreakpointValue({
        base: '100%',
        md: '100%',
        lg: '100%',
        xl: '100%',
    });

    return (
        <Box
            as='header'
            bg='customLime.50'
            h={headerHeight}
            w={headerWidth}
            position='sticky'
            top={0}
            zIndex='sticky'
        >
            <Flex mx='auto' h='100%' align='center'>
                <Center>Header</Center>
            </Flex>
        </Box>
    );
};
