<h1 align="center"> Fundamentos </h1>

### Comandos basicos: 
- "npm init --y" Gera um packet json
- "npm i -D typescript" Instala um packet json com uma dependência do typescript
- "npm i -D ts-node-dev"
- "tsc nome_arquivo.ts" => "node nome_arquivo.js"

### Variáveis e tipos:
__Declaração de variáveis:__
- "var" Gera variável com escopo global
- "let" Pode ser alterada durante o código
- "const" Não pode ser alterada, é constante

__Tipos Primitivos:__
- "let string: string"
- "let num: number"
- "let bool: boolean"
- "let troca: any" Pode receber qualquer tipo, mas não é muito utilizado


### Objetos e interfaces:
- Interface é utilizada para a sintaxe de um objeto
- "?" Significa que o tipo é opcional
- É possível declarar arrays "number[]" ou "Array<number>"

### Decisão e repetição:
- Estruturas similares a outras linguagens
- Normalmente objetos literais são utilizados para deixar o código mais "limpo"

### Array:
- Estruturas similares a outras linguagens
- Possui alguns métodos específicos pra se lidar com arrays (.find, .forEach, .map e outros)

### POO: 
- Classes são "formas" para os objetos
- Sempre possuem um metodo construtor, implicito ou explicito
- "this" quer dizer que quer acessar a propriedade especifica referenciada do objeto

__Abstração:__
- Pensar no objeto que será implementado e em seus métodos e atributos
- Classes que servem de modelo para outras classes e não são utilizadas para instanciar objetos

__Herança:__
- Uma classe compartilha características com outras, reaproveitando atributos, métodos e podendo os alterar
- Superconstrutor define os atributos da classe filha em relação aos atributos da classe mãe

__Polimorfismo:__
- Uma classe filha pode chamar um método, mas com assinatura diferente

__Visibilidade:__
- Public, private e readonly
- Public: Pode ser acessado de qualquer lugar, se não declaro já é subtendido como public
- Private: Só pode ser acessado internamente no objeto que foi declaro
- Readonly: Atributo pode ser apenas lido, um valor é atribuido a ele apenas na construção do objeto
- Protected: Pode ser acessado pela mesma classe e pelos seus filhos
