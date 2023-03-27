import { 
    ChakraProvider,
} from '@chakra-ui/react'
import { useState } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Conta from './components/pages/Conta';
import { Layout } from './components/Layout';
function App() {
  // Value é o valor e setValue a função para alterar este valor
    const [email, setEmail] = useState('');
    return (
        <BrowserRouter>
            <ChakraProvider>
                <Layout>
                    <Routes>
                        <Route path='/'element={
                            <Home/>
                        }/>
                        <Route path='/conta'element={
                            <Conta/>
                        }/>
                    </Routes>
                </Layout>
            </ChakraProvider>
        </BrowserRouter>
    );
}

export default App;
