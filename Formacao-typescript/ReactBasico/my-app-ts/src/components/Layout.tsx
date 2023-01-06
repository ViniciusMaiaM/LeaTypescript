import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
    return (
        <>
            <Header/>
            {children}
            <Footer/>
        </>
    )
}

// O elemento children é tudo que está dentro do componente
