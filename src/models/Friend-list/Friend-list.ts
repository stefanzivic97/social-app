import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { FriendModel } from './index';


@Table
export default class FriendList extends Model<FriendList> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    /**
     * * Association
     */

    @HasMany(() => FriendModel)
    public friends!: [FriendModel];

    // // * FriendList 1:n Friend
    // @HasMany(() => FriendModel)
    // public friends!: FriendModel[];

}