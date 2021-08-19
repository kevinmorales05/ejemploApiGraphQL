//dependencias para crear el servidor
const {ApolloServer, gql} = require('apollo-server');
//importacion de tipos y de funciones para alterar la base de datos
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');

const conectarDB = require('./config/db')

//conexion de la base de datos
conectarDB();
//creamos un servidor
const server = new ApolloServer({typeDefs, resolvers,
    context:({req}) => {
       const token = req.headers['authorization'] || '';
       if(token) {

        try {
            const usuario =jwt.verify(token, process.env.SECRETA);
            return {
                usuario
            }
        } catch (error) {
            console.log(error)
        }
           
       } 
    }

});