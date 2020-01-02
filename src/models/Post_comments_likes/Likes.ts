import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo, HasMany
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { PostModel } from './Posts'
import { PostLikeModel } from './Post-likes';
import { CommentLikeModel } from './Commet-likes';

@Table
export class LikeModel extends Model<LikeModel> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    /**
     * * Association
     */

    // * Like 1:n PostLikes
    @HasMany(() => PostLikeModel)
    public postLikes!: PostLikeModel[];
    
    // * Like 1:n CommentLikes
    @HasMany(() => CommentLikeModel)
    public commentLikes!: CommentLikeModel[];

    // * Post 1:n Likes
    @ForeignKey(() => PostModel)
    @Column({ type: DataType.STRING })
    public postId!: String;

    @BelongsTo(() => PostModel)
    public post!: PostModel;
    
    
}