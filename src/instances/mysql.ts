import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();
// Conexão com o banco
export const sequelize = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_USER as string,
    process.env.MYSQL_PASSWORD as string,
    {
        dialect:'mysql',
        port:parseInt(process.env.MYSQL_PORT as string),
        host:process.env.MYSQL_HOST
    }
);

// Função para testar a conexão
export const conectarBanco = async ()=>{
    try{
        await sequelize.authenticate();
        console.log("Conectado ao banco com sucesso!");
    }catch(error){
        console.error("Erro ao conectar com o banco:", error);
    }
};
