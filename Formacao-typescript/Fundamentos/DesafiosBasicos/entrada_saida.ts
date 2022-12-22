// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente, onde: 
// - "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// TODO:  Crie um código que retorne o terceiro, sétimo e nono nome da lista

let nomes = new Array(10)
		
for(let i=0 ; i<10; i++)
    nomes[i] = gets();
			
console.log(nomes[2])
console.log(nomes[6])
console.log(nomes[8])
