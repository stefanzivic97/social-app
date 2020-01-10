import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { Min, Max } from 'class-validator';
import { UserModel } from '../User/index'
import { LikeModel } from './index';

@Table
export default class Post extends Model<Post> {

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

    @ForeignKey(() => UserModel)
    public user_id!: UserModel;

    @BelongsTo(() => UserModel)
    public user!: UserModel;

}