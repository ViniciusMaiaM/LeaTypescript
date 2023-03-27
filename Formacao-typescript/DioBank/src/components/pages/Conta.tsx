import { Box, Center, SimpleGrid } from '@chakra-ui/react'
import CardInfo from '../CardInfo'
import { useEffect, useState} from 'react';
import { api } from '../api';

interface userData{
    email: string,
    password: string,
    name: string,
    balance: number
}

const Conta = () => {
    const [userData, setUserData] = useState<null | userData>();

    useEffect(() => {
        const getData = async () => {
            const data: any | userData = await api;
            setUserData(data);
        }

        getData();
    }, [])
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                <CardInfo text='Informações de acesso'/>
                <CardInfo text='Informações da conta'/>
            </SimpleGrid>
        </Center>
    )
}

export default Conta
