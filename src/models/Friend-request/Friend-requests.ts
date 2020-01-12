import { 
    Model, Table, Column, AllowNull,
    PrimaryKey, DataType,
    BeforeCreate, BeforeUpdate,
    ForeignKey, BelongsTo,
    HasMany
} from 'sequelize-typescript';
import { RequestModel } from './index';

@Table
export default class FriendRequests extends Model<FriendRequests> {

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