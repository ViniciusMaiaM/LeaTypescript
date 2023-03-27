const conta = {
    email: "viniciusmaiamarinho1@gmail.com",
    password: "1234",
    name: "Vinicius Maia",
    balance: 2000.00
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
});
