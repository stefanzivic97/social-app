import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { LikeModel } from './index';

@Table
export default class CommentLike extends Model<CommentLike> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public like!: Boolean;

    /**
     * * Association
     */

    @ForeignKey(() => LikeModel)
    public like_id!: string;

    @BelongsTo(() => LikeModel)
    public like_model!: LikeModel;

    // // * Like 1:n CommentLikes
    // @ForeignKey(() => LikeModel)
    // @Column({ type: DataType.STRING })
    // public likeId!: LikeModel;

    // @BelongsTo(() => LikeModel)
    // public commentLike!: LikeModel;

}