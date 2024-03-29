import { Box, Center, SimpleGrid, Spinner } from '@chakra-ui/react'
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

    const actualDate = new Date()
    return (
        <Center>
            <SimpleGrid columns={2} spacing={8} paddingTop={16}>
                {
                    userData === undefined || userData === null ? 
                    (
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    ):
                    (
                        <>
                            <CardInfo mainContent= {`Bem vindo ${userData?.name}`} content={`${actualDate.getDay()} / ${actualDate.getMonth()} / ${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()} `}/> 
                            <CardInfo mainContent='Saldo' content={`R$ ${userData.balance}`}/>
                        </>
                        
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Conta
