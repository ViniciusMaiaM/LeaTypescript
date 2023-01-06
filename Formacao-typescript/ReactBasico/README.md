<h1 align="center"> React Básico </h1>

### O que é:
- Biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.
- Trabalha com componentes
- Maior velocidade de renderização de páginas
- React Hooks

### Comandos Básicos:
- "npm i -g create-react-app" Fazer instalação do react
- "npx create-react-app my-app" Inicializando aplicação
- "npm start" Executa a aplicação


### Pontos Importantes:
- No react todas as tags possuem fechamento
- Não permite que trabalhe com dois componentes irmãos no mesmo nível, para lidar com isso se utiliza o 'React.Fragment' ou apenas '<>'
- Props drillin é a possibilidade de passar propriedades de um local para o outro
- É possível criar componentes para a renderização de outros componentes
- Existem duas formas de estilização no react, uma é a bolha de estilo separada, já vem com os css por padrão  da instalação e a outra é o styled component, estilização dentro do mesmo arquivo
- Na pasta services são colocadas todas as funções do programa

### Estilização: 
- "npm i styles-components" Instala lib de integração de css
- "npm i -- save-dev @types/styled-components"
- "npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion" Biblioteca de react para estilização

### Testes:
- Testes de e2e (ponta a ponta, testa todo o fluxo da aplicação) + caro + processamento
- Testes de integração (Testam como os componentes da aplicação funcionam quando estão integrados)
- Testes unitários (Testam um componente específico da aplicação) + barato - processamento
- TDD (Escrita do código já pensando no teste)
