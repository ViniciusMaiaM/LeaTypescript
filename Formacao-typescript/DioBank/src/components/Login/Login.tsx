import { 
    Center,
    Input,
    Box,
    Heading,
    FormControl,
    Flex,
    Button,
    InputRightElement,
    InputGroup,
    Link,
    FormLabel,
    ChakraProvider
} from '@chakra-ui/react'

import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/card';
import React, { useState, useEffect } from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { login } from '../../services/login'
import { LoginButton } from '../Button/LoginButton'
import { theme } from './Theme';
import { api } from '../api';

interface userData{
    email: string,
    password: string,
    name: string

}

export const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
    const [email, setEmail] = useState('');
    const [userData, setUserData] = useState<null | userData>();
    // Definindo que o useState pode ser null ou de tipo userData

    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api;
            setUserData(data);
        }

        getData();
    }, []);

    return (
        <ChakraProvider theme={theme}>
            <Box minHeight='100vh' backgroundColor='#820AD1' padding='25px'>
                <Center>
                    <Card backgroundColor='#FFFFFF' borderRadius='7px' p='6' marginTop='10' width='59vh' gap='10' boxShadow='2xl'>
                        <CardHeader p='25px'>
                            <Center>
                                {userData === null || userData === undefined 
                                ? <h1>Loading...</h1>
                                : <h1>Informações carregadas</h1>}
                                <Heading size='lg'>Faça Login</Heading>
                            </Center>
                        </CardHeader>
                        <CardBody p='25px'>
                        <Flex direction='column' align='center' gap='25px'>
                            <Center>
                                <FormControl variant='floating' id='first-name' >
                                    <InputGroup width='xs' >
                                        <Input placeholder=" " type='email' variant='flushed' focusBorderColor='#820AD1' value={email} onChange={
                                            (event) => {setEmail(event.target.value)}}/>
                                        <FormLabel color='#7A859E' fontWeight='400'>Email</FormLabel>
                                    </InputGroup>
                                </FormControl>
                            </Center>
                            <InputGroup width='xs'>
                                <Input placeholder="Senha" type={show ? 'text' : 'password'}  variant='flushed' focusBorderColor='#820AD1' />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </Flex>
                        </CardBody>
                        <Flex alignItems='center' direction='column' pb='20px' gap='8px'>
                            <CardFooter pb='25px'>
                                <LoginButton action={() => login(email)} alert="Login"/>
                            </CardFooter>
                            <Link href='https://github.com/viniciusMaiaM/' color='#820AD1' fontWeight='bold' isExternal>
                                Esqueci Minha Senha <ExternalLinkIcon mx='2px' />
                            </Link>
                            <Link href='#' color='#820AD1' fontWeight='bold' isExternal>
                                Ainda não sou cliente <ExternalLinkIcon mx='2px' />
                            </Link>
                        </Flex >
                    </Card>
                </Center>
            </Box>
        </ChakraProvider>
    );
}
