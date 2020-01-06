import { Sequelize } from 'sequelize-typescript';
import { UserModel } from './User/Users';

const modlesPath = './src/Models/';
const userFolderPath = __dirname + modlesPath + 'User';
const postFolderPath = __dirname + modlesPath + 'Post_comments_likes';


export const sequelize = new Sequelize({
    database: 'some_db',
    dialect: 'mysql',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    storage: ':memory:',
    models: [userFolderPath, postFolderPath]
})