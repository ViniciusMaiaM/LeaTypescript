import { login } from "./login"
import { api } from "../components/api";

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'viniciusmaiamarinho1@gmail.com';

    it('Deve exibir um alert com boas vindas', async () => {
        await login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinda(o) ${mockEmail}!`)
    });

    it('Não deve exibir mensagem de boas vindas sem email', async() => {
        await login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith('Bem Vinda(o)!');
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        await login('emailinvalido@gmail.com');
        expect(mockAlert).toHaveBeenCalledWith('Email inválido');
    })
})
