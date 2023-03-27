import { Box } from '@chakra-ui/react'

interface ICardInfo{
    text: string;
}

const CardInfo = ({ text }: ICardInfo) => {
    return (
        <Box 
            backgroundColor='white' 
            minHeight='25vh' 
            padding={8} 
            borderRadius='25px'
        >
            { text }
        </Box>
    );
};

export default CardInfo