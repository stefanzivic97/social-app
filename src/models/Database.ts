import { Sequelize, Table, Column, ForeignKey, BelongsTo, HasMany, Model } from 'sequelize-typescript';
import { UserModel, InformationModel } from './User/index';
import { 
    LikeModel, 
    PostModel, PostLikeModel,
    CommentModel, CommentLikeModel
} from './Post_comments_likes/index';



// @Table
// export class Player extends Model<Player> {
 
//   @Column
//   name!: string;
 
//   @Column
//   num!: number;
 
//   @ForeignKey(() => Team)
//   @Column
//   teamId!: number;
 
//   @BelongsTo(() => Team)
//   team!: Team;
// }
 
// @Table
// export class Team extends Model<Team> {
 
//   @Column
//   name!: string;
 
//   @HasMany(() => Player)
//   players!: Player[];
// }


export const sequelize = new Sequelize({
    database: 'social',
    dialect: 'mysql',
    username: 'root',
    password: process.env.DATABASE_PASSWORD,
    storage: ':memory:',
    models: [
        // Team, Player
        UserModel, InformationModel,
        // LikeModel,
        PostModel, //PostLikeModel,
        // CommentModel, CommentLikeModel
    ]
})