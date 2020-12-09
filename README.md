[![Author](https://img.shields.io/badge/author-marioandre01-3771a1?style=flat-square)](https://github.com/marioandre01)
[![Languages](https://img.shields.io/github/languages/count/marioandre01/nodejs_starter_rocketseat?color=%233771a1&style=flat-square)](#)
[![Stars](https://img.shields.io/github/stars/marioandre01/nodejs_starter_rocketseat?color=3771a1&style=flat-square)](https://github.com/marioandre01/nodejs_starter_rocketseat/stargazers)
[![Forks](https://img.shields.io/github/forks/marioandre01/nodejs_starter_rocketseat?color=%233771a1&style=flat-square)](https://github.com/marioandre01/nodejs_starter_rocketseat/network/members)
[![Contributors](https://img.shields.io/github/contributors/marioandre01/nodejs_starter_rocketseat?color=3771a1&style=flat-square)](https://github.com/marioandre01/nodejs_starter_rocketseat/graphs/contributors)
[![Licence](https://img.shields.io/github/license/marioandre01/nodejs_starter_rocketseat?color=%233771a1&style=flat-square)](https://github.com/marioandre01/nodejs_starter_rocketseat/blob/master/LICENCE.md)


<h1 align="center">
    NodeJS Starter Rocketseat
</h1>

<p align="center"> 
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#bulb-funcionamento-da-aplicação">Funcionamento da aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-executando-a-aplicação">Executando a aplicação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#gear-contribuição">Contribuição</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

## 💻 Projeto

Esse projeto foi desenvolvido por meio do curso NodeJS Starter da [Rocketseat](https://app.rocketseat.com.br/node/curso-node-js). O projeto tem como objetivo desenvolver uma aplicação backend utilizando NodeJS para ter uma primeiro contato com essa tecnologia e entender seus conceitos e sua estrutura de funcionamento. A aplicação consiste em uma API REST utilizando os métodos HTTP GET, POST, PUT e DELETE para criar, mostrar, atualizar e deletar produtos (Sistema CRUD) contendo as informações "Título", "Descrição" e “URL”. Para sua construção foi usado o NodeJS com a biblioteca Express para lidar com as rotas. E para salvar as informações foi usado o banco de dados não relacional mongoDB. Assim utilizando um aplicação frontend configurada nesse cenário, é possível fazer requisições a API para listar informações de todos os produtos, listar um produto específico através do “Id” e atualizar e deletar informações. A listagem dos produtos foi configurada para paginar as informações em 10 por vez. Para simular o frontend e testar a API foi utilizado o Insomnia.

## 📋 Tecnologias

O projeto foi desenvolvido com as seguintes tecnologias:

- Javascript
- [NodeJS](https://nodejs.org/en/)
- Express
- MongoDB
- Cors

## 💻 Executando a aplicação

### Requisitos necessários

Para executar o projeto é necessário ter instalado em seu sistema:
- NodeJS
- Gerenciador de pacotes Npm ou Yarn 

### :octocat: Clonando o Repositório

```bash
$ git clone https://github.com/marioandre01/nodejs_starter_rocketseat.git

# entre na pasta do projeto
$ cd nodejs_starter_rocketseat
```
### 💻 Executando a aplicação

Entre na pasta node-api

```bash

$ cd node-api

```
Instale as dependências

```bash

$ yarn

# ou pelo npm
$ npm install

```

Execute a aplicação

```bash

$ yarn dev

# ou pelo npm
$ npm run dev

```

## :gear: Contribuição

Para contribuir com esse projeto faça os seguintes passos:

- Faça um fork desse repositório;
- Crie uma branch com a sua feature: `git checkout -b minha-feature`;
- Faça commit das suas alterações: `git commit -m 'feat: Minha nova feature'`;
- Faça push para a sua branch: `git push origin minha-feature`.

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](./LICENSE.md) para mais detalhes.




