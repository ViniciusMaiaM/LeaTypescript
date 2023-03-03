import { useState } from 'react';
import { 
    ChakraProvider,
} from '@chakra-ui/react'

import { Card } from './components/Card';
function App() {
  // Value é o valor e setValue a função para alterar este valor
    const [email, setEmail] = useState('');
    return (
        <ChakraProvider>
            <Card />
        </ChakraProvider>
    );
}

export default App;
