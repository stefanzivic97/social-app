import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { UserModel } from '../User/index';

@Table
export class FriendModel extends Model<FriendModel> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    /**
     * * Association
     */

    // // * User 1:n Friends
    // @ForeignKey(() => UserModel)
    // @Column({ type: DataType.STRING })
    // public userId!: UserModel;

    // @BelongsTo(() => UserModel)
    // public friend!: UserModel;
    

}