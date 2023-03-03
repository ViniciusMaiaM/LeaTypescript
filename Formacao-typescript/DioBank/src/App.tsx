import { useState } from 'react';
import { 
  ChakraProvider,
} from '@chakra-ui/react'

import { Card } from './components/Card';
function App() {
  const [value, setValue] = useState(0);

  const state = {
    value: 0,
    setValue: (p) => {
      value = p
    }
  }
  return (
    <ChakraProvider>
        <Card />
    </ChakraProvider>
  );
}

export default App;
