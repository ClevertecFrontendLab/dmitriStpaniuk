import './App.css';

import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from 'react-router';

import { theme } from '~/components/theme/theme';

import router from './routes';

function App() {
    return (
        <ChakraProvider theme={theme}>
            <RouterProvider router={router} />
        </ChakraProvider>
    );
}

export default App;
