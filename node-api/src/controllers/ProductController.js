//No Modelo- arquitetura MVC "Model View Controller" isso é chamado de controller
//O ProductController models será o cara que vai lidar basicamente com as opreções 
// que se pode ter em determinado model, por  exemplo, listagem, criação, atualização, criação e outros


//importar o mongoose, para lidar com a parte do banco de dados
const mongoose = require('mongoose');

//importa o model de products
const Product = mongoose.model('Product');

//req.body - corpo da requisição
//req.params.id - para os ids definidos nas rotas
//req.query - são para parametros GET, ex: parametro page no GEt do insomnia

//exporta um objeto com algumass opções
module.exports = {
    //Criação de rotas

    //Listagem
    async index(req, res) {
        const { page = 1 } = req.query;

        //mostra todos os registros da tabela
        //const products = await Product.find();
        //mostrar com paginação
        const products = await Product.paginate({}, { page, limit: 10 });

        return res.json(products);
    },

    //Detalhe, retornar info de um unico produto
    async show(req, res) {
        const product = await Product.findById(req.params.id);

        return res.json(product);
    },

    //Criação
    async store(req, res) {
        const product = await Product.create(req.body);

        return res.json(product);
    },

    //Atualização de informações
    async update(req, res) {
        //new: true diz pro mondoose retornar o produto atualizado para a variavel product
        //Se não colocar o new: true, vai retornar para a variavel product o produto antes de atualizar o valores
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

        return res.json(product);
    },

    //Deletar
    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }
};

//estrutura json - è uma estrutura de dados muito utilizada em api REST
//Uma estrutura de dados é basicamenet uma forma que é facíl de ler e alterar dadaos dentro de uma estrutura
//assim como se fosse uma array ou um objeto no javascript
//Como vai ser utilizado javascript tando no backend como no frontend, fica facíl utiliar a estrutura json, e fica facíl mante essa estrutura nesses dois ambientes
//O json é muito parecido com um objeto javascript, por isso seu nome é javascript object notacion - json