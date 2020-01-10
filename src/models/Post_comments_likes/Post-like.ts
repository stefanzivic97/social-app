import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { LikeModel } from './index';

@Table
export default class PostLike extends Model<PostLike> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    readonly id!: String;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public like!: Boolean;

    /**
     * * Association
     */

    // // * Post 1:n Likes
    // @ForeignKey(() => LikeModel)
    // @Column({ type: DataType.STRING })
    // public likeId!: String;

    // @BelongsTo(() => LikeModel)
    // public likePost!: LikeModel;
}