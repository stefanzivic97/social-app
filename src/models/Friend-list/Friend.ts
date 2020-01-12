import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { UserModel } from '../User/index';
import { FriendListModel } from './index';

@Table
export default class Friend extends Model<Friend> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    /**
     * * Association
     */

    @ForeignKey(() => FriendListModel)
    public friend_list_id!: string;

    @BelongsTo(() => FriendListModel)
    public friendList!: FriendListModel;

    // // * User 1:n Friends
    // @ForeignKey(() => UserModel)
    // @Column({ type: DataType.STRING })
    // public userId!: UserModel;

    // @BelongsTo(() => UserModel)
    // public friend!: UserModel;
    

}