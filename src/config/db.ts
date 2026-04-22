import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();


const sequelize = process.env.DATABASE_URL
  ? new Sequelize(process.env.DATABASE_URL, {
      dialect: "mysql",
      logging: false,
    })
  : new Sequelize(
      process.env.DB_DATABASE as string,
      process.env.DB_USERNAME as string,
      process.env.DB_PASSWORD as string,
      {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT),
        dialect: "mysql",
        logging: false,
      }
    );

export default sequelize;



