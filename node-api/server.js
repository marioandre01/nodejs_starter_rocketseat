//O express é basicamenet um micro framework que vai ajudar a lidar com rotas e views
//As rotas são basicamnetes os endereços das urls que o usuário vai poder acessar da API
//As views que são as formas de visualização

//Cross-Origin Resource Sharing ou CORS é um mecanismo que permite que recursos restritos 
//em uma página da web sejam recuperados por outro domínio fora do domínio ao qual pertence 
//o recurso que será recuperado

//O CORS (Cross-origin Resource Sharing) é um mecanismo utilizado pelos navegadores para 
//compartilhar recursos entre diferentes origens. O CORS é uma especificação do W3C e faz 
//uso de headers do HTTP para informar aos navegadores se determinado recurso pode ser ou não acessado.


//importando o express, retorna uma função
const express = require('express');

//importando o cors
const cors = require('cors');

//importando o mongoose
const mongoose = require('mongoose');

const requireDir = require('require-dir');

//executar a função express
//Iniciando o App
const app = express();

//permitir que a aplicação receba informações no formato json
//Ao usar o metod POST colocar essa linha
app.use(express.json());

//usra o cors
//Dentro da função do cors pode-se passar parametros para permitir quais dominios pode-se ter acesso a API, algumas configurações a mais de segurança e outros
//Não colocando nenhum parametro, permite-se acesso a todos os dominios, e pode-se ser acessada publicamente
app.use(cors());

//Iniciandoo database DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });

//Fazer um require do arquivo de Product do models
//require('./src/models/Product');
requireDir('./src/models');

//const Product = mongoose.model('Product');

//Toda vez que for feita uma requisição com get na rota raiz "/"
//req simboliza a requisição feita ao servidor
//quando é feito um F5 na página esta ocorrendo uma requisição no servidor
// O req vai conter todos os detalhes possiveis dessa requisição
//O que se pode pegar do req: parametros, corpo da requisição, cabeçalho, usuário que ta fazendo a requisição, autenticação, endereço IP e outros
//O res simboliza a resposta que vai ser feita para a requisição
//Basicamente o fluxo do backend é o frontend fazendo uma requisição e o servidor devolvendo uma resposta
// O res vai conter todas as informação para se devolver uma resposta para o usuário.
//será usado o metodo send() para enviar uma resposta para o usuário.
//Primeira rota
/*
app.get('/', (req, res) => {
    Product.create({
        title: "React Native",
        description: "Build native apps with React",
        url: "http://github.com/facebook/react-native"
    });

    return res.send('Hello Rocketseat');
});*/

//use() é como se fosse um coringa, ele  vai receber todo tipo de requisição
//ele vai receber não sé GET, POST, PUT e DELETE, ele vai aceitar todas as requisições
//Toda vez que se receber uma requisição a partir da rota "api", "api" é um prefixo para a rota
//se não quise utilizar pode deixar sem
//Da rota "/api" será enviado para "./src/routes"
//Antes estava assim: loacalhost:3001/produtos - imagina que tivesse
//Agora ficou assim: loacalhost:3001/api/produtos

//Rotas
app.use('/api', require('./src/routes'));

//fazer a aplicação ouvir na porta 3001 no navegador
app.listen(3001);

//O mongoose é um ORM de bancos não relacionais com mongodb
//O ORM basicamente encapsula a lógica das operações do banco de dados através do código
//Com isso ao invéis de usar a linguagem da base de dados(sql)
//ao inves de fazer "INSERT into tabela passando os valores valores", vai sempre se utilizar apenas código java script 
//pra fazer "INSERT", "DELETE", "UPDATES" e tudo mais.
//Por isso o uso do ORM, ele vai fazer um Object Relational Mapper, que é a relação de transformar as tabelas do banco de dados em objetos do javascript