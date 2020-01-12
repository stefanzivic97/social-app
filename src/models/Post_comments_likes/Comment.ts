import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { PostModel } from './index';
import { LikeModel } from './index';

@Table
export default class Comment extends Model<Comment> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public parentId!: String;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public child!: String;

    @AllowNull(true)
    @Column({ type: DataType.TEXT })
    public comment!: String;

    /**
     * * Association 
     */

    @ForeignKey(() => PostModel)
    public post_id!: string;

    @BelongsTo(() => PostModel)
    public post!: PostModel;
}