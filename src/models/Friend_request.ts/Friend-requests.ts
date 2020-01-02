import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { RequestModel } from './request';

@Table
export class FriendRequestsModel extends Model<FriendRequestsModel> {

    @PrimaryKey
    @Column({ type: DataType.UUID, defaultValue: DataType.UUIDV4 })
    public readonly id!: String;

    /**
     * * Association
     */

    // * FriendRequest 1:n Requsts
    @HasMany(() => RequestModel)
    public requsts!: RequestModel;
    
}