import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn();
    window.alert = mockAlert;
    const mockEmail = 'viniciusmaiamarinho1@gmail.com';

    it('Deve exibir um alert com boas vindas', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`Bem vinda(o) ${mockEmail}!`)
    });

    it('Não deve exibir mensagem de boas vindas sem email', () => {
        login(mockEmail);
        expect(mockAlert).not.toHaveBeenCalledWith('Bem Vinda(o)!');
    })
})
