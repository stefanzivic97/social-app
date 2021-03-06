import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { PostModel, PostLikeModel, CommentLikeModel, CommentModel } from './index'
import CommentLike from './Commet-like';

@Table
export default class Like extends Model<Like> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: string;

    /**
     * * Association
     */

    @ForeignKey(() => PostModel)
    public post_id!: string;

    @BelongsTo(() => PostModel)
    public post!: PostModel;

    @HasMany(() => PostLikeModel)
    public postLikes!: [PostLikeModel];

    @HasMany(() => CommentLikeModel)
    public commentLikes!: [CommentLikeModel];


    // // * Like 1:n PostLikes
    // @HasMany(() => PostLikeModel)
    // public postLikes!: PostLikeModel[];
    
    // // * Like 1:n CommentLikes
    // @HasMany(() => CommentLikeModel)
    // public commentLikes!: CommentLikeModel[];

    // // * Post 1:n Likes
    // @ForeignKey(() => PostModel)
    // @Column({ type: DataType.STRING })
    // public postId!: string;

    // @BelongsTo(() => PostModel)
    // public post!: PostModel;
    
    // @ForeignKey(() => CommentModel)
    // @Column({ type: DataType.STRING })
    // public commentId!: string;
}