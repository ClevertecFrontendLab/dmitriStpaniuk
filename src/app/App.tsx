import './App.css';

import { ChakraProvider } from '@chakra-ui/react';

import { MainLayout } from '~/components/Layouts/MainLayout';
import { theme } from '~/components/theme/theme';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <MainLayout>
                <h1>Hello World</h1>
            </MainLayout>
        </ChakraProvider>
    );
}

export default App;
