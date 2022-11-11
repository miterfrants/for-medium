import { Sequelize } from "sequelize";
import fs from 'fs';

if (!process.env.DB_HOST) {
    // inject env from file
    const envFromFile = fs.readFileSync('.env').toString();
    envFromFile.split('\n').forEach((item)=>{
      const array = item.split('=');
      const key = array[0];
      const value = array[1];
      process.env[key] = value;
    })
}

export const dbContext = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql'
});