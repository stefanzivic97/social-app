import { Sequelize } from 'sequelize-typescript';
import { UserModel, UserDetailsModel } from './User/index';
import { 
    LikeModel, 
    PostModel, PostLikeModel,
    CommentModel, CommentLikeModel
} from './Post_comments_likes/index';


export const sequelize = new Sequelize({
    database: 'some_db',
    dialect: 'mysql',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    storage: ':memory:',
    models: [
        UserModel, UserDetailsModel,
        PostModel, PostLikeModel,
        CommentModel, CommentLikeModel,
        LikeModel
    ]
})