import { Header } from "./Header/Header";
import { Box } from '@chakra-ui/react';

export const Layout = ({children}: any) =>{
    return(
        <Box minHeight='100vh' backgroundColor='#820AD1'>
            <Header />
            { children }
        </Box>
    )
}
