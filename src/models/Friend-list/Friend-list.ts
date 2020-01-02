import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { FriendModel } from './Friend';


@Table
export class FriendListModel extends Model<FriendListModel> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    /**
     * * Association
     */

    // * FriendList 1:n Friend
    @HasMany(() => FriendModel)
    public friends!: FriendModel[];

}