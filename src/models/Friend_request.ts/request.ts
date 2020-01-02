import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { FriendRequestsModel } from './Friend-requests'

@Table
export class RequestModel extends Model<RequestModel> {

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
    @Column({ type: DataType.STRING })
    public friendRequestId!: String;

    @BelongsTo(() => FriendRequestsModel)
    public request!: FriendRequestsModel;
}