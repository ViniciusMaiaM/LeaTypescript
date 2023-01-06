import React from 'react';
import logo from './logo.svg';
import { Layout } from './components/Layout';
import styled from 'styled-components';
import {
    Box,
    Button,
    Center,
    ChakraProvider,
    Input
} from '@chakra-ui/react'


function App() {
    return (
        <ChakraProvider>
            <Box minHeight="100vh" backgroundColor='#9413dc' padding='25px'> {/*Esse minHeight quer dizer que ele sempre vai ocupar 100% da tela */}
                <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
                    <Center>
                        <h1>Faça o login</h1>
                    </Center>
                    <Input placeholder="email" />
                    <Input placeholder="password" />
                    <Center>
                        <Button colorScheme='teal' size='sm' width='100%' marginTop='5px'>
                            Button
                        </Button>
                    </Center>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default App;
