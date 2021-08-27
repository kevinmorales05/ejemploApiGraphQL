//dependencias para crear el servidor
const {ApolloServer, gql} = require('apollo-server');
//importacion de tipos y de funciones para alterar la base de datos
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
//importo jwt
const jwt = require('jsonwebtoken');
require('dotenv').config('variables.env');

const conectarDB = require('./config/db')

//conexion de la base de datos
conectarDB();
//creamos un servidor
const server = new ApolloServer({typeDefs, resolvers,
    context:({req}) => {
       const token = req.headers['authorization'] || '';
       console.log(token)
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

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
    console.log(`
      🚀  Server is ready at ${url}
      📭  Query at https://studio.apollographql.com/dev
    `);
  });