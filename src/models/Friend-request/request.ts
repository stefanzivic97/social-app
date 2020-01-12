import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { FriendRequestsModel } from './index';

@Table
export default class Request extends Model<Request> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    public toUser!: String;

    @AllowNull(false)
    @Column({ type: DataType.STRING })
    public fromUser!: String;

    @Column({ type: DataType.ENUM('PENDING', 'BLOCKED', 'FRIENDS'), defaultValue: 'PENDING' })
    public status!: String;

    /**
     * * Association
     */

    // * FriendRequest 1:n Requests
    @ForeignKey(() => FriendRequestsModel)
    public friendRequestId!: String;

    @BelongsTo(() => FriendRequestsModel)
    public friendRequest!: FriendRequestsModel;
}