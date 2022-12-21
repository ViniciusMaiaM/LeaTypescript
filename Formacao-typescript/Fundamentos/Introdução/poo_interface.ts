interface Pessoa{
    nome: string,
    idade: number,
    profissão?: string
}

const vini: Pessoa = {
    nome: 'Vinicius',
    idade: 19,
    profissão: "Desenvolvedor"
}

const outro: Pessoa = {
    nome: 'Outro',
    idade: 20
}

const arrayPessoa: Array<Pessoa> = [ //Declaração de array de pes
    vini,
    outro
]
