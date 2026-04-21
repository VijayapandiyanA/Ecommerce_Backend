import {Sequelize} from 'sequelize'
import dotenv from "dotenv"
dotenv.config()

export const sequelize = new Sequelize(
    process.env.DATABASE_URL as string,
{
    host:process.env.DB_HOST as string,
    dialect:"mysql",
    logging:false

}
)
