import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { UserModel } from '../User/Users'
import { LikeModel } from './Likes';

@Table
export class PostModel extends Model<PostModel> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    @AllowNull(true)
    @Max(65)
    @Column({ type: DataType.STRING })
    public title!: String;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public content!: String;

    @AllowNull(true)
    @Column({ type: DataType.STRING })
    public imageUrl!: String;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: true })
    public published!: Boolean;

    @AllowNull(false)
    @Column({ type: DataType.BOOLEAN, defaultValue: false })
    public isDeleted!: Boolean;

    /**
     * * Association
     */

    // * User 1:n Post 
    @ForeignKey(() => UserModel)
    @Column({ type: DataType.STRING })
    public userId!: String;

    @BelongsTo(() => UserModel)
    public post!: UserModel;

    // * Post 1:n Likes
    @HasMany(() => LikeModel)
    public likes!: LikeModel[];
}