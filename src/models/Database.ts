import { Sequelize, Table, Column, ForeignKey, BelongsTo, HasMany, Model } from 'sequelize-typescript';
import { UserModel, InformationModel } from './User/index';
import { 
    LikeModel, 
    PostModel, PostLikeModel,
    CommentModel, CommentLikeModel
} from './Post_comments_likes/index';
import { FriendRequestsModel, RequestModel } from './Friend-request/index';

export const sequelize = new Sequelize({
    database: 'social',
    dialect: 'mysql',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    storage: ':memory:',
    models: [
        UserModel, InformationModel,
        LikeModel,
        PostModel, PostLikeModel,
        CommentModel, CommentLikeModel,
        FriendRequestsModel, RequestModel
    ]
})