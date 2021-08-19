const mongoose =require('mongoose');
require('dotenv').config({ path: 'variables.env'});

const conectarDB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        })
        console.log('Base de Datos Conectada')
    } catch (error) {
        console.log('Hubo un error en la conexión');
        console.log(error);
        process.exit(1);

    }
}
module.exports = conectarDB;