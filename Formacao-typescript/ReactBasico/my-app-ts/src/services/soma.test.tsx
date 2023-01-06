import { soma, multiplica } from "./soma"

describe('soma',() => {
    
    it('deve somar 1 ao número informado', () =>{ //Descrição do que a função deve fazer
        const value = soma(1)
        expect(value).toBe(2)
    })

    it('deve multiplicar o número por 2 ', () =>{
        const value = multiplica(2)
        expect(value).toBe(4)
    })
})
