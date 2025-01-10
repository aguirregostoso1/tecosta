const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();


const sequelize = new Sequelize(
    
    process.env.DB_NAME,       
    process.env.DB_USER,       
    process.env.DB_PASSWORD,  
    {
        host: process.env.DB_HOST,   
        dialect: 'mysql',           
        logging: console.log,      
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Conexão com o banco de dados MySQL foi bem-sucedida.');
    })
    .catch((err) => {
        console.error('Erro ao conectar-se ao banco de dados:', err);
    });

module.exports = sequelize;
